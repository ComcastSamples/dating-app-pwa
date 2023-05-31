import React from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { IonPage, IonHeader, IonButton, IonContent,
  IonToolbar, IonTitle, IonItem, IonNavLink
} from '@ionic/react';
import Permissions from './Permissions';

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
        <IonNavLink routerDirection="forward" component={() => <Permissions />}>
          <IonButton>Get started with Permissions</IonButton>
        </IonNavLink>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
