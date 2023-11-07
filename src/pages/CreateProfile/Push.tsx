import React, { useState } from 'react';
import { IonHeader, IonButton, IonContent, IonButtons,
  IonToolbar, IonTitle, IonMenuButton, IonPage, IonChip
} from '@ionic/react';
import Footer from '../../components/Footer';

// Update this with your VAPID Public Key from running npm run keys:
const VAPID_PUBLIC_KEY = 'BKIT91vGGICRYmt4fEahDGKM7QHzfMtS0LZnkVeAiEm0fVgE-pt9GL0QdVr68OfQXWO6KIUn_QDalo2STvXq5Ec';

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

function enableNotifications() {
  Notification.requestPermission().then((result) => {
    console.log(result);
  });
}

const Notifications: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [notificationsSubscribed, setNotificationsSubscribed] = useState(false);
  let registration = null;
  let subscription = null;

  async function getSubscription() {
    registration = await navigator.serviceWorker.getRegistration();
    subscription = await registration.pushManager.getSubscription();
    if (subscription && subscription.endpoint) {
      setNotificationsSubscribed(true);
    }
  }
  getSubscription();

  navigator.permissions.query({name: 'notifications'}).then(permission => {
    setNotificationsEnabled(permission.state === 'granted');
  }).catch(e => console.log(e));

  async function subscribeToPush() {
    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array(VAPID_PUBLIC_KEY)
    });
    postToServer('http://localhost:3001/add-subscription', subscription);
    setNotificationsSubscribed(true);
  }

  async function unsubscribeToPush() {
    fetch('http://localhost:3001/remove-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({endpoint: subscription.endpoint})
    });
    const unsubscribed = await subscription.unsubscribe();
    if (unsubscribed) {
      console.info('Successfully unsubscribed from push notifications.');
      setNotificationsSubscribed(false);
    }
  }

  async function notifyMe() {
    const registration = await navigator.serviceWorker.getRegistration();
    const subscription = await registration.pushManager.getSubscription();
    postToServer('http://localhost:3001/notify-me', { endpoint: subscription.endpoint });
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Notifying our Cats Remotely</IonTitle>
          <IonChip slot="end" disabled>8 of 8</IonChip>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding" id="main-content">
        <h1>Notifications - Push</h1>
        <ul>
          <li><a href="https://web.dev/push-notifications-server-codelab/" rel="noreferrer" target="_blank">web.dev Codelab: Build a push notification server</a></li>
        </ul>

        <p>
          Let's connect to our local server and send push notifications to our users.
          Open server/server.js to get started.
        </p>

        <IonButton onClick={enableNotifications} disabled={notificationsEnabled}>{
          notificationsEnabled ? 'Notifications Enabled' : "Enable Notifications" }</IonButton>

        {notificationsSubscribed ?
            <IonButton onClick={unsubscribeToPush}>Unsubscribe From Push Notification</IonButton>
            : <IonButton onClick={subscribeToPush}>Subscribe To Push Notification</IonButton>
        }
        {notificationsSubscribed &&
          <IonButton onClick={notifyMe}>Send Push Notification</IonButton>
        }
      </IonContent>
      <Footer prev='/profile/notifications' next='/profile/complete'></Footer>
    </IonPage>
  );
};

export default Notifications;
