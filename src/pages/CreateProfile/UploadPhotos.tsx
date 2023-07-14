import styles from './profile.module.css';
import React, { useRef, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { IonPage, IonHeader, IonContent, IonChip,
  IonToolbar, IonTitle, IonItem, IonLabel,
  IonButtons, IonMenuButton
} from '@ionic/react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';


const UploadPhotos: React.FC = () => {
  let [photos, setPhotos] = useLocalStorageState('photos', { defaultValue: []});
  let input = useRef(null);
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

  useEffect(() => {
    input.current.onchange = () => {
      if (input.current.files && input.current.files.length > 0) {
        // yep we're for looping, the Files are a FileList that is NOT an Array
        for (let i = 0; i < input.current.files.length; i++) {
          let file = input.current.files[i];
          filesToProcess.current.push(file);
        }
        processFiles();
      }
    }
  })

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
        <Menu></Menu>
        <IonContent class="ion-padding" id="main-content">
          <h1>Candid Uploads 🎞️</h1>
          <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications" rel="noreferrer" target="_blank">MDN: Using files from web applications</a></li>
          </ul>
          <p>
            Upload photos and use the File API to render them to the screen.
          </p>
          <IonItem>
            <IonLabel>Upload Photo(s):</IonLabel>
          </IonItem>
          <IonItem>
            <div><input type="file" capture="user" accept="image/*" multiple ref={input}></input></div>
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
