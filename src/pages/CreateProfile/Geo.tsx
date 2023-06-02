import styles from './profile.module.css';
import React, { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { IonHeader, IonButton, IonContent,
  IonToolbar, IonTitle, IonInput, IonItem, IonLabel,
  IonSpinner, IonPage,
  IonNavLink, IonButtons, IonBackButton
} from '@ionic/react';
import Camera from './Camera';

function getLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition((g => {
        resolve(convertToLocation(g.coords.latitude, g.coords.longitude));
      }), reject);
    }
  });
}

function convertToLocation(lat:number, lon:number) {
  return fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
    .then(r => r.json());
}

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
        <IonButton routerLink="/profile/camera" routerDirection="forward">Move on to Camera</IonButton>
      </>
    }

    return <IonButton className={styles.button} expand="block" shape="round"
      onClick={(e) => {
        e.preventDefault();
        setLoading(true);
        getLocation().then(
          (location: any) => {
            let {address} = location;
            setLocation(`${address.city}, ${address.state}`);
            setLoading(false);
          })
      }}>
        Get Location
    </IonButton>
  }

  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton></IonBackButton>
            </IonButtons>
            <IonTitle>Looking for cats in your area?</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
          <h1>Using Geolocation</h1>
          <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API" target="_blank">Chrome Permissions Blog</a></li>
          </ul>
          <p>
            Geolocation will give the latitude and logitude of the user. Use the convertToLocation
            function to display city and state in setLocation. Also enter your name for the profile.
          </p>
          <IonItem>
            <IonLabel>Your Display Name</IonLabel>
            <IonInput label="Name" placeholder="Your Name"></IonInput>
          </IonItem>
          {showAddress()}
      </IonContent>
    </IonPage>
  );
};

export default Login;
