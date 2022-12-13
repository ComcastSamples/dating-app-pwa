import './Camera.css';
import React from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

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
  console.log('Got here');
  return (
    <React.Fragment>
      <h2 className="h2">Name and Profile Image</h2>
      <IonItem>
        <IonLabel>Your Name</IonLabel>
        <IonInput placeholder="Name"></IonInput>
      </IonItem>
      <input type="file" accept="image/x-png,image/jpeg,image/gif"
                   onChange={upload}/>
      <IonButton shape="round" href="/create-profile">Create Profile</IonButton>
    </React.Fragment>
  );
};

export default Camera;
