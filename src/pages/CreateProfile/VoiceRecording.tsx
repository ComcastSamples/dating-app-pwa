import styles from './profile.module.css';
import React from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { IonPage, IonHeader, IonButton, IonContent,
  IonToolbar, IonTitle,
IonButtons, IonMenuButton } from '@ionic/react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

// https://web.dev/patterns/media/microphone-record/

const VoiceRecording: React.FC = () => {
  let [recording, setRecording] = useLocalStorageState('recording', { defaultValue: ''});
  let mediaRecorder;

  function blobToBase64(blob): Promise<string> {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  }


  const handleSuccess = function(stream:any) {
    const recordedChunks = [];
    mediaRecorder = new MediaRecorder(stream, {mimeType: 'audio/webm'});

    mediaRecorder.addEventListener('dataavailable', function(e) {
      if (e.data.size > 0) recordedChunks.push(e.data);
    });

    mediaRecorder.addEventListener('stop', function() {
      let r = new Blob(recordedChunks)
      blobToBase64(r).then(result => {
        setRecording(result)
      });
    });

    mediaRecorder.start();
  };

  function clearRecording() {
    setRecording('');
  }

  function stopRecording() {
    mediaRecorder.stop();
  }

  function startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(handleSuccess);
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Catcalling</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Menu></Menu>
      <IonContent class="ion-padding" id="main-content">
        <div className={styles.imgContainer}>
          <audio controls className={styles.audio}>
            { recording && <source type="audio/wav" src={recording} /> }
          </audio>
        </div>
        <div className='ion-text-center'>
          {recording ?
            <IonButton shape="round" onClick={clearRecording}>Clear Recording</IonButton>
            : <IonButton shape="round" onClick={startRecording}>Start Recording</IonButton>}
          <IonButton shape="round" onClick={stopRecording}>Stop Recording</IonButton>
        </div>
      </IonContent>
      <Footer prev='/profile/upload' next='/profile/notifications'></Footer>
    </IonPage>
  );
};

export default VoiceRecording;
