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
  const imageFlippedRef = useRef(false);

  const flipImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
  }

  const takePhoto = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const player = videoRef.current;

    context.drawImage(player, 0, 0, canvas.width, canvas.height);
    setPhoto(canvas.toDataURL("image/png"));
  }

  useEffect(() => {
    const startStreaming = () => {
      navigator.mediaDevices
        .getUserMedia({ video: {
          width: { min: 640, ideal: 960 },
          height: { min: 400, ideal: 540 },
          aspectRatio: { ideal: 1.7777777778 },
        }, audio: false })
        .then((stream) => {
          if (videoRef.current) { // this check is to prevent applying the src to an old, removed video tag when navigating away while the video player is initializing
            mediaStreamRef.current = stream;
            videoRef.current.srcObject = stream;
          } else {
            stopStreaming();
          }
        });
    }

    const stopStreaming = () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getVideoTracks().forEach(track => track.stop());
      }
    }

    if(!imageFlippedRef.current) {
      flipImage();
      imageFlippedRef.current = true;
    }

    if (!photo) {
      startStreaming();
    } else {
      stopStreaming(true);
    }

    return stopStreaming;
  }, [photo]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Get ready to capture the cattitude</IonTitle>
          <IonChip slot="end" disabled>4 of 7</IonChip>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding" id="main-content">
        <h1>Smile! 📸</h1>
        <ul>
          <li><a href="https://web.dev/media-capturing-images/#access-the-camera-interactively" rel="noreferrer" target="_blank">web.dev: Capturing an image from the user</a></li>
          <li><a href="https://christianheilmann.com/2013/07/19/flipping-the-image-when-accessing-the-laptop-camera-with-getusermedia/" rel="noreferrer" target="_blank">Flipping the image when accessing the laptop camera with getUserMedia</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos" rel="noreferrer" target="_blank">MDN: Taking still photos with getUserMedia()</a></li>
        </ul>
        <p>
          Follow the first article to learn how to capture a photo from your camera. Unfortunately, we're on laptops and input type='file' won't work. Make sure you also update stopStreaming so the camera turns off when we're done. And you may want to flip the image...
        </p>

        <div className={styles.imgContainer}>
          <video id="video" autoPlay ref={videoRef} className={styles.video} hidden={!!photo} playsInline></video>
          <canvas id="canvas" ref={canvasRef} width="960" height="540" hidden></canvas>
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
