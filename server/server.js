/*
* Welcome to the Push Notification server portion. Instructions:
* https://web.dev/articles/push-notifications-server-codelab#manage
*/

import express from 'express';
import webpush from 'web-push';
import bodyparser from 'body-parser';
import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';
import cors from 'cors';

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

const app = express();
app.use(bodyparser.json());
app.use(express.static(join(__dirname, 'static')));
app.use(cors());

function sendNotifications(subscriptions) {
  // see https://web.dev/articles/push-notifications-server-codelab#send_notifications
}


app.post('/add-subscription', (request, response) => {
  // see https://web.dev/articles/push-notifications-server-codelab#save
  console.log(`Subscribing ${request.body.endpoint}`);
});

app.post('/remove-subscription', (request, response) => {
  // see https://web.dev/articles/push-notifications-server-codelab#delete_old_subscription_information
  console.log(`Unsubscribing ${request.body.endpoint}`);
});

app.post('/notify-me', (request, response) => {
  // see https://web.dev/articles/push-notifications-server-codelab#send_notifications
  console.log(`Notifying ${request.body.endpoint}`);
});

app.post('/notify-all', (request, response) => {
  // see https://web.dev/articles/push-notifications-server-codelab#send_notifications
  console.log('Notifying all subscribers');
});

app.listen(3001, () => {
  console.log(`Your Push Notifications Server is up and running 🚀

The original Codelab instructions are available at
https://web.dev/articles/push-notifications-server-codelab
https://codelabs.developers.google.com/codelabs/push-notifications

A page to locally test the Push Notifications capabilities is available at http://localhost:3001/

Note this server is separate from the web server in the root of the project that runs our client code at http://localhost:3000/,
however that code proxies to 3001.
`);
});
