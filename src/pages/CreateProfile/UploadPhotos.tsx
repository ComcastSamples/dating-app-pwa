import styles from './profile.module.css';
import React, { useRef } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { IonPage, IonHeader, IonContent, IonChip,
  IonToolbar, IonTitle, IonItem, IonLabel,
  IonButtons, IonMenuButton
} from '@ionic/react';
import Footer from '../../components/Footer';


const UploadPhotos: React.FC = () => {
  let [photos, setPhotos] = useLocalStorageState('photos', { defaultValue: []});

  const handleFileUpload = event => {
    // TODO: handle the uploading of files
  }

  const photoMarkup = photos.map((photo, index) => <img alt="your uploaded pics" className={styles.photoThumb} src={photo} key={index} />);

  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Meowtastic moments</IonTitle>
            <IonChip slot="end" disabled>5 of 8</IonChip>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding" id="main-content">
          <h1>Candid Uploads 🎞️</h1>
          <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications" rel="noreferrer" target="_blank">MDN: Using files from web applications</a></li>
          </ul>
          <p>
            Upload a single photo and use the File API to render it to the screen.<br />
            If you still have time, try supporting uploading multiple photos at once.
          </p>
          <p>
            For test images, see the <code>public/assets/cats/</code> folder of this project.
          </p>
          <IonItem>
            <IonLabel>Upload Photo(s):</IonLabel>
          </IonItem>
          <IonItem>
            <div><input type="file" accept="image/*" multiple onChange={handleFileUpload}></input></div>
          </IonItem>
          <div className={styles.photoContainer}>
            {photoMarkup}
          </div>
        </IonContent>
        <Footer prev='/profile/camera' next='/profile/voicerecording'></Footer>
    </IonPage>
  );
};

export default UploadPhotos;
