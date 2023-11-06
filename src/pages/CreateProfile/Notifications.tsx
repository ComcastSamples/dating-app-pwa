import React, { useState } from 'react';
import { IonHeader, IonButton, IonContent, IonButtons,
  IonToolbar, IonTitle, IonMenuButton, IonPage, IonChip
} from '@ionic/react';
import Footer from '../../components/Footer';

// The spec: https://notifications.spec.whatwg.org/
const MyNotification = {
  body: 'you\'ve been cat called',
  icon: '/assets/cats/esteban.jpg',
  badge: '/assets/icon/icon.png',
  image: '/assets/cats/esteban.jpg',
  click_action: '/tab',
  // Keeps the notification displayed
  requireInteraction: false,
  // do NOT play a sound
  silent: false,
  // Unique identifier for this notification
  tag: 'unique-identifier-idnumber-0',
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

function enableNotifications() {
  Notification.requestPermission().then((result) => {
    console.log(result);
  });
}

async function displayNotification() {
  const registration = await navigator.serviceWorker.getRegistration();
  registration.showNotification('Permission Granted!', MyNotification);

   // @ts-ignore
  if (navigator.setAppBadge) {
    // Set a banner on phones to show we have messages
    // @ts-ignore
    navigator.setAppBadge(23);
  }
}

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
          <li><a href="https://web.dev/push-notifications-display-a-notification/" rel="noreferrer" target="_blank">web.dev: Displaying a Notification</a></li>
          <li><a href="https://flaviocopes.com/push-api/" rel="noreferrer" target="_blank">The Push API Guide (notifications on your laptop)</a></li>
        </ul>

        <p>
          Let's make sure we can notify our cats of potential mates. 
          First, play around with displaying notifications and the different options they offer. 
          Then move on to the server push notifications.
        </p>

        <IonButton onClick={enableNotifications} disabled={notificationsEnabled}>{
          notificationsEnabled ? 'Notifications Enabled' : "Enable Notifications" }</IonButton>
        <IonButton onClick={displayNotification}>Display Notification</IonButton>
      </IonContent>
      <Footer prev='/profile/voicerecording' next='/profile/push'></Footer>
    </IonPage>
  );
};

export default Notifications;
