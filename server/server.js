import express from 'express';
import webpush from 'web-push';
import bodyparser from 'body-parser';
import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';

// https://github.com/typicode/lowdb#usage
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
const __dirname = dirname(fileURLToPath(import.meta.url))
const dbFile = join(__dirname, 'db.json')

const db = new LowSync(new JSONFileSync(dbFile), {
  subscriptions: []
});

const vapidDetails = {
  publicKey: process.env.VAPID_PUBLIC_KEY,
  privateKey: process.env.VAPID_PRIVATE_KEY,
  subject: 'mailto:test@test.com'
};

function sendNotifications(subscriptions) {
  // Create the notification content.
  const notification = JSON.stringify({
    title: "Hello, Notifications!",
    options: {
      body: `ID: ${Math.floor(Math.random() * 100)}`
    }
  });
  // Customize how the push service should attempt to deliver the push message.
  // And provide authentication information.
  const options = {
    TTL: 10000,
    vapidDetails: vapidDetails
  };
  // Send a push message to each client specified in the subscriptions array.
  subscriptions.forEach(subscription => {
    const endpoint = subscription.endpoint;
    const id = endpoint.substr((endpoint.length - 8), endpoint.length);
    webpush.sendNotification(subscription, notification, options)
      .then(result => {
        console.log(`Endpoint ID: ${id}`);
        console.log(`Result: ${result.statusCode}`);
      })
      .catch(error => {
        console.log(`Endpoint ID: ${id}`);
        console.log(`Error: ${error} `);
      });
  });
}

const app = express();
app.use(bodyparser.json());
app.use(express.static(join(__dirname, 'static')));

app.post('/add-subscription', (request, response) => {
  console.log(`Subscribing ${request.body.endpoint}`);
  db.read();
  db.data.subscriptions.push(request.body);
  db.write();
  response.sendStatus(200);
});

app.post('/remove-subscription', (request, response) => {
  console.log(`Unsubscribing ${request.body.endpoint}`);
  db.read();
  db.data.subscriptions = db.data.subscriptions
    .filter(s => s.endpoint !== request.body.endpoint);
  db.write();
  response.sendStatus(200);
});

app.post('/notify-me', (request, response) => {
  console.log(`Notifying ${request.body.endpoint}`);
  db.read();
  const {subscriptions} = db.data;
  const subscription = subscriptions.find(s => s.endpoint === request.body.endpoint);
  sendNotifications([subscription]);
  response.sendStatus(200);
});

app.post('/notify-all', (request, response) => {
  console.log('Notifying all subscribers');
  db.read();
  const {subscriptions} = db.data;
  if (subscriptions.length > 0) {
    sendNotifications(subscriptions);
    response.sendStatus(200);
  } else {
    response.sendStatus(409);
  }
});

app.listen(3001, () => {
  console.log(`Your Push Notifications Server is up and running 🚀

The original Codelab instructions are available at 
https://web.dev/articles/push-notifications-server-codelab
https://codelabs.developers.google.com/codelabs/push-notifications

A page to locally test the Push Notifications capabilities is available at http://localhost:3001/

Note this server is separate from the web server in the root of the project that runs our client code at http://localhost:3000/
`);
});
