import React, { useState, useEffect } from 'react';
import { IonHeader, IonContent, IonButtons,
  IonToolbar, IonTitle, IonPage, IonMenuButton
} from '@ionic/react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

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
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Asking Purr-mission!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Menu></Menu>
      <IonContent class="ion-padding" id="main-content">
        <h1>Getting access with Permissions API</h1>
        <ul>
          <li><a href="https://developer.chrome.com/blog/permissions-api-for-the-web/" rel="noreferrer" target="_blank">Chrome Permissions Blog</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API" rel="noreferrer" target="_blank">MDN Permissions</a></li>
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
      </IonContent>
      <Footer prev='/manifest/' next='/profile/geo'></Footer>
    </IonPage>
  );
};

export default Permissions;
