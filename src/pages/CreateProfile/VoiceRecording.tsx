import styles from './profile.module.css';
import React, { useEffect } from 'react';
import camera from './work/camera.js';
import useLocalStorageState from 'use-local-storage-state';
import { IonPage, IonHeader, IonButton, IonContent,
  IonToolbar, IonTitle, IonItem, IonLabel,
IonButtons, IonBackButton } from '@ionic/react';

const VoiceRecording: React.FC = () => {
  let [recording, setRecording] = useLocalStorageState('recording', { defaultValue: ''});

  const handleSuccess = function(stream:any) {
    const options = {mimeType: 'audio/webm'};
    const recordedChunks = [];
    const mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.addEventListener('dataavailable', function(e) {
      if (e.data.size > 0) recordedChunks.push(e.data);
    });

    mediaRecorder.addEventListener('stop', function() {
      // setRecording(new Blob(recordedChunks));
    });

    mediaRecorder.start();
  };

  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(handleSuccess);

  function clearRecording() {
    // setRecording(new Blob());
  }

  function takeRecording() {
    // setRecording(new Blob());
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Catcalling</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <div className={styles.imgContainer}>
          <audio controls className={styles.audio}></audio>
        </div>
        <div className='ion-text-center'>
          {recording ?
            <IonButton shape="round" onClick={clearRecording}>Clear Recording</IonButton>
            : <IonButton shape="round" onClick={takeRecording}>Take Recording</IonButton>}
          <IonButton shape="round" href="/profile/upload">Save Recording</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default VoiceRecording;
