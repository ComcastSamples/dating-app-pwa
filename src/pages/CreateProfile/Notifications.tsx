import React from 'react';
import { IonHeader, IonButton, IonContent, IonButtons,
  IonToolbar, IonTitle, IonMenuButton, IonPage
} from '@ionic/react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

//The spec: https://notifications.spec.whatwg.org/
const MyNotification = {
  body: 'you\'ve been cat called',
  icon: '/assets/cats/esteban.jpg',
  badge: '/assets/icon/icon.png',
  //Doesnt work on Apple!
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

function displayNotification() {
  Notification.requestPermission().then(function(result) {
    console.log(result); // granted!
    new Notification('Permission Granted!', MyNotification);
  });
}

const Notifications: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Notifying our Cats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Menu></Menu>
      <IonContent class="ion-padding" id="main-content">
        <h1>Showing Notifications</h1>
        <ul>
          <li><a href="https://web.dev/push-notifications-display-a-notification/" rel="noreferrer" target="_blank">Displaying a Notification</a></li>
          <li><a href="https://flaviocopes.com/push-api/" rel="noreferrer" target="_blank">Notifications on Mac</a></li>
        </ul>

        <p>
          Lets make sure we can notify our cats of potential mates.
        </p>

        <IonButton onClick={displayNotification}>Display Notification</IonButton>

      </IonContent>
      <Footer prev='/profile/voicerecording' next='/profile/complete'></Footer>
    </IonPage>
  );
};

export default Notifications;
