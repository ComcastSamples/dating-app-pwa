import styles from './profile.module.css';
import React, { useEffect } from 'react';
import camera from './work/camera.js';
import useLocalStorageState from 'use-local-storage-state';
import { IonPage, IonHeader, IonButton, IonContent,
  IonToolbar, IonTitle, IonButtons, IonMenuButton  } from '@ionic/react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

// https://web.dev/media-capturing-images/
// http://christianheilmann.com/2013/07/19/flipping-the-image-when-accessing-the-laptop-camera-with-getusermedia/
const Camera: React.FC = () => {
  useEffect(() => { camera.start();
    return () => {
      camera.stop();
    }
  }, []);
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
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Get ready to capture the cattitude</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Menu></Menu>
      <IonContent class="ion-padding" id="main-content">
        <h1>Smile! 📸</h1>
        <ul>
          <li><a href="https://web.dev/media-capturing-images/" rel="noreferrer" target="_blank">web.dev: Capturing an image from the user</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos" rel="noreferrer" target="_blank">MDN: Taking still photos with getUserMedia()</a></li>
          <li><a href="https://christianheilmann.com/2013/07/19/flipping-the-image-when-accessing-the-laptop-camera-with-getusermedia/" rel="noreferrer" target="_blank">Flipping the image when accessing the laptop camera with getUserMedia</a></li>
        </ul>
        <p>
          Leverage the provided <code>start</code>, <code>stop</code>, and <code>take</code> functions from <code>src/pages/CreateProfile/work/camera.js</code> to capture a photo using your webcam.
        </p>
        <p>Also use the provided <code>clear</code> function to clear the taken photo.</p>
        <div className={styles.imgContainer}>
          <video id="video" className={styles.video}
            style={photo ? {display: 'none'} : {}}></video>
          <canvas id="canvas" className={styles.canvas}></canvas>
          <img alt="" id="photo" src={photo} className={styles.photo} style={photo ? {} : {display: 'none'}} />
        </div>
        <div className="ion-text-center">
          {photo ?
            <IonButton shape="round" onClick={clearPhoto}>Clear Photo</IonButton>
            : <IonButton shape="round" onClick={takePhoto}>Take Photo</IonButton>}
        </div>
      </IonContent>

      <Footer prev='/profile/geo' next='/profile/upload'></Footer>
    </IonPage>
  );
};

export default Camera;
