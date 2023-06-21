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
        <div className={styles.imgContainer}>
          <video id="video" className={styles.video}
            style={photo ? {display: 'none'} : {}}></video>
          <canvas id="canvas" className={styles.canvas}></canvas>
          <img alt="from your camera" id="photo" src={photo} className={styles.photo} />
        </div>
        <div className='ion-text-center'>
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
