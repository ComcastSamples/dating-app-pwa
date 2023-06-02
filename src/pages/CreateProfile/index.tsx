import React from 'react';
import { IonPage, IonHeader, IonButton, IonContent,
  IonToolbar, IonTitle
} from '@ionic/react';

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Progressive Web App (PWA) Workshop</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>
          Welcome to the workshop.
        </h1>
        <p>
          We're going to create a Dating App for Cats using the latest web technologies. Below are links to the pages and their topic. Each page will contain instructions with links to documentation. Edit the
          page with the corresponding name to do the work.
        </p>
        <ol>
          <li><a href="/profile/permissions">Permissions</a></li>
          <li><a href="/profile/geo">Geolocation</a></li>
          <li><a href="/profile/camera">Camera</a></li>
          <li><a href="/profile/upload">Upload Photos</a></li>
          <li><a href="/profile/voicerecording">Voice Recording</a></li>
        </ol>

          <IonButton routerLink="/profile/permissions" routerDirection="forward">Get started with Permissions</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
