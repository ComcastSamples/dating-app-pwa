// @ts-nocheck
import styles from './profile.module.css';
import React, { useEffect, useRef } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { IonPage, IonHeader, IonButton, IonContent, IonChip,
  IonToolbar, IonTitle, IonButtons, IonMenuButton  } from '@ionic/react';
import Footer from '../../components/Footer';

// https://web.dev/media-capturing-images/
// http://christianheilmann.com/2013/07/19/flipping-the-image-when-accessing-the-laptop-camera-with-getusermedia/
const Camera: React.FC = () => {
  const [photo, setPhoto] = useLocalStorageState('photo', { defaultValue: ''});
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaStreamRef = useRef(null);

  const flipImage = () => {
    // TODO: code to flip the image
  }

  const takePhoto = () => {
    // TODO: code to take the photo
  }

  useEffect(() => {
    // TODO: code to start/stop a live view of the webcam
  }, [photo]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Get ready to capture the cattitude</IonTitle>
          <IonChip slot="end" disabled>4 of 8</IonChip>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding" id="main-content">
        <h1>Smile! 📸</h1>
        <ul>
          <li><a href="https://web.dev/media-capturing-images/#access-the-camera-interactively" rel="noreferrer" target="_blank">web.dev: Capturing an image from the user</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos" rel="noreferrer" target="_blank">MDN: Taking still photos with getUserMedia()</a></li>
        </ul>
        <p>
          Follow the first article to learn how to capture a photo from your camera. Note that unfortunately since we're on laptops, <code>input type='file'</code> won't work. Your goal is to at least show the camera's video feed, capture a photo, display that photo, and provide an option to clear the photo.
        </p>
        <p>
          Note if you're testing on Microsoft Edge, your phone may be prompted for the camera instead of your laptop.
        </p>
        <p>
          If you complete those items and still have time, you can also try to <a href="https://christianheilmann.com/2013/07/19/flipping-the-image-when-accessing-the-laptop-camera-with-getusermedia/" rel="noreferrer" target="_blank">flip the image so it is a mirror image</a>, and update <code>stopStreaming</code> so the camera turns off when you've captured an image or you navigate away from the page. <a href="https://react.dev/reference/react/useEffect#parameters" rel="noreferrer" target="_blank">React's useEffect cleanup function</a> can be helpful for that.
        </p>

        <div className={styles.imgContainer}>
          <video id="video" autoPlay ref={videoRef} className={styles.video} hidden={!!photo} playsInline></video>
          <canvas id="canvas" ref={canvasRef} hidden></canvas>
          <img alt="" id="photo" src={photo} className={styles.photo} hidden={!photo} />
        </div>
        <div className="ion-text-center">
          {photo ?
            <IonButton shape="round" onClick={() => setPhoto('')}>Clear Photo</IonButton>
            : <IonButton shape="round" onClick={takePhoto}>Take Photo</IonButton>}
        </div>
      </IonContent>

      <Footer prev='/profile/geo' next='/profile/upload'></Footer>
    </IonPage>
  );
};

export default Camera;
