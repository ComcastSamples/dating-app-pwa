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
  let filesToProcess = useRef([]);

  const readFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setPhotos(photos.concat(e.target.result));
    };
    reader.readAsDataURL(file);
  }

  const processFiles = () => {
    if (filesToProcess.current.length > 0) {
      let nextFile = filesToProcess.current.shift();
      readFile(nextFile);
    }
  }

  processFiles();

  const handleFileUpload = event => {
    let fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      // yep we're for looping, the Files are a FileList that is NOT an Array
      for (let i = 0; i < fileList.length; i++) {
        let file = fileList[i];
        filesToProcess.current.push(file);
      }
      processFiles();
    }
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
            <IonChip slot="end" disabled>5 of 7</IonChip>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding" id="main-content">
          <h1>Candid Uploads 🎞️</h1>
          <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications" rel="noreferrer" target="_blank">MDN: Using files from web applications</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture" rel="noreferrer" target="_blank">MDN: Input Capture</a></li>
          </ul>
          <p>
            Upload photos and use the File API to render them to the screen.
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
