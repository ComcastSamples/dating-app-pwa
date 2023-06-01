import styles from './profile.module.css';
import React from 'react';
import camera from './work/camera.js';
import useLocalStorageState from 'use-local-storage-state';
import { IonPage, IonHeader, IonButton, IonContent,
  IonToolbar, IonTitle, IonItem, IonLabel } from '@ionic/react';

function upload(): Promise<void> {
  return new Promise<void>(async (resolve, reject) => {
      const filePicker = document.querySelector('input');

      if (!filePicker || !filePicker.files
          || filePicker.files.length <= 0) {
          reject('No file selected.');
          return;
      }
      const myFile = filePicker.files[0];
      console.log(myFile);

      resolve();
  });
}

const UploadPhotos: React.FC = () => {
  let [photo, setPhoto] = useLocalStorageState('photo', { defaultValue: ''});

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Upload Photos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <img id="photo" src={photo} className={styles.photo} />
        <IonItem>
          <button id="startbutton" style={{display: 'none'}}></button>
          <IonButton shape="round" onClick={() => camera.take()}>Take Photo</IonButton>
        </IonItem>
        <IonItem>
          <IonLabel>Upload Photo</IonLabel>
          <input type="file" capture="user" accept="image/*"></input>
        </IonItem>
        <IonButton shape="round" href="/create-profile">Create Profile</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default UploadPhotos;
