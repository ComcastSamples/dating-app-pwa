import styles from './profile.module.css';
import React, { useEffect } from 'react';
import camera from './work/camera.js';
import useLocalStorageState from 'use-local-storage-state';
import { IonPage, IonHeader, IonButton, IonContent,
  IonToolbar, IonTitle, IonButtons, IonBackButton  } from '@ionic/react';

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

const Camera: React.FC = () => {
  useEffect(() => { camera.start(); }, []);
  let [photo, setPhoto] = useLocalStorageState('photo', { defaultValue: ''});

  let takePhoto = () => {
    setPhoto(camera.take())
  }

  let clearPhoto = () => {
    setPhoto('');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Get ready to capture the cattitude</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <div className={styles.imgContainer}>
          <video id="video" className={styles.video}
            style={photo ? {display: 'none'} : {}}></video>
          <canvas id="canvas" className={styles.canvas}></canvas>
          <img id="photo" src={photo} className={styles.photo} />
        </div>
        <div className='ion-text-center'>
          {photo ?
            <IonButton shape="round" onClick={clearPhoto}>Clear Photo</IonButton>
            : <IonButton shape="round" onClick={takePhoto}>Take Photo</IonButton>}
        </div>
        <IonButton href="/profile/upload">Move on to Uploading</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Camera;
