import styles from './profile.module.css';
import React, { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { IonHeader, IonButton, IonContent, IonChip,
  IonToolbar, IonTitle, IonInput, IonItem, IonLabel,
  IonSpinner, IonPage,
  IonButtons, IonMenuButton
} from '@ionic/react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

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

// https://nominatim.org/release-docs/develop/api/Reverse/
function convertToLocation(lat:number, lon:number) {
  return fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
    .then(r => r.json());
}

const Login: React.FC = () => {
  let [location, setLocation] = useLocalStorageState('location', { defaultValue: ''});
  let [userName, setUserName] = useLocalStorageState('userName', { defaultValue: ''});
  let [loading, setLoading] = useState(false);

  function showAddress() {
    if (loading) {
      return <IonSpinner className={styles.spinner} name="bubbles"></IonSpinner>
    }

    if (location) {
      return <IonItem>Location: {location}</IonItem>
    }
  }

  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Looking for cats in your area?</IonTitle>
            <IonChip slot="end" disabled>3 of 7</IonChip>
          </IonToolbar>
        </IonHeader>
        <Menu></Menu>
        <IonContent class="ion-padding" id="main-content">
          <h1>Using Geolocation</h1>
          <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API" rel="noreferrer" target="_blank">MDN: Using the Geolocation API</a></li>
          </ul>
          <p>
            The Geolocation API will return the latitude and longitude of the user.
          </p>
          <p>
            Use the provided <code>convertToLocation</code> function to display city and state in a <code>setLocation</code> function that leverages <a href="https://www.npmjs.com/package/use-local-storage-state" rel="noreferrer" target="_blank"><code>use-local-storage-state</code></a> React <a href="https://react.dev/learn/reusing-logic-with-custom-hooks" rel="noreferrer" target="_blank">Custom Hook</a> so we can use it later for the ViewProfile page.
          </p>
          <p>
            Also, be sure to enter your name for the profile.
          </p>
          <IonItem>
            <IonLabel>Your Display Name</IonLabel>
            <IonInput label="Name:" placeholder="Your Name" value={userName}
            onIonChange={({ detail }) => setUserName(detail.value)}></IonInput>
          </IonItem>
          {showAddress()}
          <IonButton className={styles.button} expand="block" shape="round"
            onClick={(e) => {
              e.preventDefault();
              setLoading(true);
              getLocation().then(
                (location: any) => {
                  let {address} = location;
                  setLocation(`${address.city || address.town || address.borough || address.village || address.suburb}, ${address.state}`);
                  setLoading(false);
                }).catch(_ => {
                  setLocation("Unknown");
                  setLoading(false);
                })
            }}>
            { location ? 'Update' : 'Get'} Location
          </IonButton>
      </IonContent>
      <Footer prev='/profile/permissions' next='/profile/camera'></Footer>
    </IonPage>
  );
};

export default Login;
