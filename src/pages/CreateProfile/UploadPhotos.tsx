import styles from './profile.module.css';
import React, { useRef, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { IonPage, IonHeader, IonContent,
  IonToolbar, IonTitle, IonItem, IonLabel,
  IonButtons, IonMenuButton
} from '@ionic/react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';


const UploadPhotos: React.FC = () => {
  let [photos, setPhotos] = useLocalStorageState('photos', { defaultValue: []});
  let input = useRef(null);

  useEffect(() => {
    input.current.onchange = evt => {
      const [file] = input.current.files
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPhotos(photos.concat(e.target.result))
        };
        reader.readAsDataURL(file);
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
          </IonToolbar>
        </IonHeader>
        <Menu></Menu>
        <IonContent class="ion-padding" id="main-content">
          <IonItem>
            <IonLabel>Upload Photo</IonLabel>
            <input type="file" capture="user" accept="image/*" multiple ref={input}></input>
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
