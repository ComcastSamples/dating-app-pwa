import React, { useState } from 'react';
import { IonHeader, IonButton, IonContent, IonButtons,
  IonToolbar, IonTitle, IonMenuButton, IonPage, IonChip
} from '@ionic/react';
import Footer from '../../components/Footer';

//The spec: https://notifications.spec.whatwg.org/
const MyNotification = {
  body: 'you\'ve been cat called',
  icon: '/assets/cats/esteban.jpg',
  badge: '/assets/icon/icon.png',
  image: '/assets/cats/esteban.jpg',
  click_action: '/tab',
  //Keeps the notification displayed
  requireInteraction: false,
  //dont play a sound
  silent: false,
  //Unique identifier for this notification
  tag: 'unique-identifier-idnumber-3',
  // Actions only work from ServiceWorkers...
  // actions: [
  //   {
  //     action: 'yes',
  //     type: 'button',
  //     title: '👍 Yes',
  //   },
  //   {
  //     action: 'no',
  //     type: 'text',
  //     title: '👎 No',
  //     placeholder: 'Type your explanation here',
  //   },
  // ],
};

/* Utility functions. */
// Convert a base64 string to Uint8Array.
// Must do this so the server can understand the VAPID_PUBLIC_KEY.
const urlB64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

async function postToServer(url, data) {
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  console.log(response);
}

const VAPID_PUBLIC_KEY = 'BHa2cccM28C-AGTVTt4I4ADnwBiOzlz3RgwUdFOXHNAh3SymMgzx51s8uUPx2DhTBVpbPx-uTx7dHcDGCpqPaqI';
async function subscribeToPush() {
  const registration = await navigator.serviceWorker.getRegistration();
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlB64ToUint8Array(VAPID_PUBLIC_KEY)
  });
  postToServer('https://lovely-spicy-card.glitch.me/add-subscription', subscription);
}

function enableNotifications() {
  Notification.requestPermission().then((result) => {
    console.log(result);
  });
}

async function displayNotification() {
  const registration = await navigator.serviceWorker.getRegistration();
  registration.showNotification('Permission Granted!', MyNotification);
}

/*
Enable CORS on Codelab - Place at top

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/

const Notifications: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  navigator.permissions.query({name: 'notifications'}).then(permission => {
    setNotificationsEnabled(permission.state === 'granted');
  }).catch(e => console.log(e));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Notifying our Cats</IonTitle>
          <IonChip slot="end" disabled>7 of 7</IonChip>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding" id="main-content">
        <h1>Notifications</h1>
        <ul>
          <li><a href="https://web.dev/push-notifications-display-a-notification/" rel="noreferrer" target="_blank">Displaying a Notification</a></li>
          <li><a href="https://flaviocopes.com/push-api/" rel="noreferrer" target="_blank">Notifications on Mac</a></li>
          <li><a href="https://web.dev/push-notifications-server-codelab/" rel="noreferrer" target="_blank">Push Notifications Server Codelab</a></li>
        </ul>

        <p>
          Let's make sure we can notify our cats of potentional mates. First, play around with displaying notifications and the different options they offer. Then move on to the server codelab.
          After the server push codelab, we'll hook this page the server codelab and get a notification from our server.
        </p>

        <IonButton onClick={enableNotifications} disabled={notificationsEnabled}>{
          notificationsEnabled ? 'Noficications Enabled' : "Enable Notifications" }</IonButton>
        <IonButton onClick={displayNotification}>Display Notification</IonButton>
        <IonButton onClick={subscribeToPush}>Subscribe To Push Notification</IonButton>
      </IonContent>
      <Footer prev='/profile/voicerecording' next='/profile/complete'></Footer>
    </IonPage>
  );
};

export default Notifications;
