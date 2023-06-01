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
          Today we're going to be covering a lot of material.
        </p>
          <IonButton routerLink="/profile/permissions" routerDirection="forward">Get started with Permissions</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
