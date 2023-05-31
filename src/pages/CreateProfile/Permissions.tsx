import styles from './Geo.module.css';
import React, { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { IonHeader, IonButton, IonContent, IonButtons,
  IonToolbar, IonTitle, IonItem, IonSpinner, IonNavLink,
  IonBackButton
} from '@ionic/react';
import Geo from './Geo';

const Permissions: React.FC = () => {
  let [location, setLocation] = useLocalStorageState('location', { defaultValue: ''});
  let [loading, setLoading] = useState(false);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Cats need permission</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Permissions API</h1>
          <p>
            Starting off simple with Name and Location using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API">Geolocation API</a>
            <br />
            You'll do your work in the 'work/geo.js' file.
          </p>

          <IonNavLink routerDirection="forward" component={() => <Geo />}>
            <IonButton>Move on to GeoLocation</IonButton>
          </IonNavLink>
      </IonContent>
    </>
  );
};

export default Permissions;
