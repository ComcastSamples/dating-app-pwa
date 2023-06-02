import React, { useState, useEffect } from 'react';
import { IonHeader, IonButton, IonContent, IonButtons,
  IonToolbar, IonTitle, IonBackButton, IonPage
} from '@ionic/react';

const Permissions: React.FC = () => {
  let [cameraStatus, setCameraStatus] = useState('');
  let [geoStatus, setGeoStatus] = useState('');
  let [microphoneStatus, setMicrophoneStatus] = useState('');

  useEffect(() => {
    navigator.permissions.query({name: 'camera' as PermissionName}).then(permission => {
      setCameraStatus(permission.state);
    });

    navigator.permissions.query({name: 'geolocation'}).then(permission => {
      setGeoStatus(permission.state);
    });

    navigator.permissions.query({name: 'microphone' as PermissionName}).then(permission => {
      setMicrophoneStatus(permission.state);
    });
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Asking Purr-mission!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Getting access with Permissions API</h1>
        <ul>
          <li><a href="https://developer.chrome.com/blog/permissions-api-for-the-web/" target="_blank">Chrome Permissions Blog</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API" target="_blank">MDN Permissions</a></li>
        </ul>

        <p>
          We need to get permission to use "camera", "geolocation", and "microphone". Read up on the docs
          and then set the corresponding states then move on.
        </p>

        <ul>
          <li>Camera: {cameraStatus}</li>
          <li>Geolocation: {geoStatus}</li>
          <li>Microphone: {microphoneStatus}</li>
        </ul>

        <IonButton routerLink="/profile/geo" routerDirection="forward">Move on to GeoLocation</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Permissions;
