import React, { useState, useEffect } from 'react';
import { IonHeader, IonContent, IonButtons,
  IonToolbar, IonTitle, IonPage, IonMenuButton, IonChip
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
          <IonChip slot="end" disabled>2 of 7</IonChip>
        </IonToolbar>
      </IonHeader>
      <Menu></Menu>
      <IonContent class="ion-padding" id="main-content">
        <h1>Getting access with Permissions API</h1>
        <ul>
          <li><a href="https://developer.chrome.com/blog/permissions-api-for-the-web/" rel="noreferrer" target="_blank">Chrome Developers Blog: Permissions API for the Web</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API" rel="noreferrer" target="_blank">MDN: Using the Permissions API</a></li>
        </ul>

        <p>
          We need to get permission to use the <code>"camera"</code>, <code>"geolocation"</code>, and <code>"microphone"</code> APIs.
        </p>
        <p>
          Read up on the docs and display each API's current permission state below then move on to the next section.
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
