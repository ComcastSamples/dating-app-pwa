import './Camera.css';
import React, { useEffect } from 'react';
import camera from './work/camera.js';
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

const Camera: React.FC = () => {
  useEffect(() => {camera.start() });

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Live Photos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <video id="video"></video>
          <canvas id="canvas" style={{ display: 'none' }}></canvas>
        </IonItem>
        <IonItem>
          <img id="photo" />
        </IonItem>
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

export default Camera;
