import styles from './profile.module.css';
import React, { useState, useRef, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { IonPage, IonHeader, IonButton, IonContent, IonChip,
  IonToolbar, IonTitle, IonItem, IonLabel, IonSpinner,
IonButtons, IonMenuButton } from '@ionic/react';
import Footer from '../../components/Footer';


const VoiceRecording: React.FC = () => {
  let [recording, setRecording] = useLocalStorageState('recording', { defaultValue: ''});
  let [recordingInProgress, setRecordingInProgress] = useState(false);
  let [recordingTime, setRecordingTime] = useState(0);
  let timerRef = useRef(null);
  let mediaRecorder = useRef(null);

  function blobToBase64(blob): Promise<string> {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  }

  useEffect(() => {
    if(recordingInProgress){
      timerRef.current = setTimeout(() => {
        setRecordingTime(recordingTime + 1);
      }, 1000);
    }
  }, [recordingTime, recordingInProgress]);

  const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4';
  const handleSuccess = function(stream:any) {
    const recordedChunks = [];
    setRecordingInProgress(true);

    mediaRecorder.current = new MediaRecorder(stream, { mimeType });

    mediaRecorder.current.addEventListener('dataavailable', function(e) {
      if (e.data.size > 0) recordedChunks.push(e.data);
    });

    mediaRecorder.current.addEventListener('stop', function() {
      let r = new Blob(recordedChunks);
      blobToBase64(r).then(result => {
        setRecording(result);
      });
    });

    mediaRecorder.current.start();
  };

  function clearRecording() {
    setRecording('');
  }

  function stopRecording() {
    mediaRecorder.current.stop();
    setRecordingInProgress(false);
    setRecordingTime(0);
    clearTimeout(timerRef.current);
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
          <IonChip slot="end" disabled>6 of 7</IonChip>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding" id="main-content">
        <h1>Recording Audio 🎙️</h1>
        <ul>
          <li><a href="https://web.dev/patterns/media/microphone-record/" rel="noreferrer" target="_blank">web.dev: How to record audio from the user's microphone</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" rel="noreferrer" target="_blank">MDN: &lt;audio&gt;: The Embed Audio element</a></li>
          <li><a href="https://learnersbucket.com/examples/interview/increment-counter-component-in-react/" rel="noreferrer" target="_blank">Increment counter component in React</a></li>
        </ul>
        <p>
          Record audio from the mic. Display a timer while recording the audio & save it once the recording stops.
        </p>
        <p>
          Once the recording is saved, allow the audio to be played back and also have a button to clear the audio recording.
        </p>
        <div className={styles.imgContainer}>
          { recording &&
            <audio controls className={styles.audio}>
              <source type={mimeType} src={recording} />
            </audio>
          }
        </div>
        <div className='ion-text-center'>
        {recordingInProgress && <IonItem color="danger"><IonSpinner name="circles" color="light"></IonSpinner><IonLabel class="ion-text-center">Recording In Progress - {recordingTime}s</IonLabel><IonSpinner name="circles" color="light"></IonSpinner></IonItem>}
          {recording ?
            <IonButton shape="round" onClick={clearRecording}>Clear Recording</IonButton>
            : !recordingInProgress && <IonButton shape="round" onClick={startRecording}>Start Recording</IonButton>}
          {recordingInProgress && <IonButton shape="round" onClick={stopRecording}>Stop Recording</IonButton>}
        </div>
      </IonContent>
      <Footer prev='/profile/upload' next='/profile/notifications'></Footer>
    </IonPage>
  );
};

export default VoiceRecording;
