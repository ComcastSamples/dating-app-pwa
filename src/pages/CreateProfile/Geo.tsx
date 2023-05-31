import styles from './profile.module.css';
import React, { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { IonHeader, IonButton, IonContent,
  IonToolbar, IonTitle, IonInput, IonItem, IonLabel,
  IonSpinner,
  IonNavLink, IonButtons, IonBackButton
} from '@ionic/react';
import Camera from './Camera';
import Geo from './work/geo.js';

const Login: React.FC = () => {
  let [location, setLocation] = useLocalStorageState('location', { defaultValue: ''});
  let [loading, setLoading] = useState(false);

  function showAddress() {
    if (loading) {
      return <IonSpinner className={styles.spinner} name="bubbles"></IonSpinner>
    }

    if (location) {
      return <>
        <IonItem>{location}</IonItem>
        <IonNavLink routerDirection="forward" component={() => <Camera />}>
            <IonButton>Move on to Camera</IonButton>
          </IonNavLink>
      </>
    }

    return <IonButton className={styles.button} expand="block" shape="round"
      onClick={(e) => {
        e.preventDefault();
        setLoading(true);
        Geo.getLocation().then(
          (location: any) => {
            console.log(location);
            let {address} = location;
            setLocation(`${address.city}, ${address.state}`);
            setLoading(false);
          })
      }}>
        Get Location
    </IonButton>
  }

  return (
    <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton></IonBackButton>
            </IonButtons>
            <IonTitle>Herding Cats in your Area</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
          <p>
            Starting off simple with Name and Location using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API">Geolocation API</a>
            <br />
            You'll do your work in the 'work/geo.js' file.
          </p>
          <IonItem>
            <IonLabel>Your Name</IonLabel>
            <IonInput label="Name" placeholder="Name"></IonInput>
          </IonItem>
          {showAddress()}
      </IonContent>
    </>
  );
};

export default Login;
