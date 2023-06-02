import styles from './profile.module.css';
import React, { useRef, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { IonPage, IonHeader, IonButton, IonContent,
  IonToolbar, IonTitle, IonItem, IonLabel } from '@ionic/react';

const UploadPhotos: React.FC = () => {
  let [photos, setPhotos] = useLocalStorageState('photos', { defaultValue: []});
  let input = useRef(null);

  useEffect(() => {
    input.current.onchange = evt => {
      const [file] = input.current.files
      if (file) {
        setPhotos(photos.concat(URL.createObjectURL(file)))
      }
    }
  })

  const photoMarkup = photos.map((photo, index) => <img className={styles.photoThumb} src={photo} key={index} />);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Meowtastic moments</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel>Upload Photo</IonLabel>
          <input type="file" capture="user" accept="image/*" multiple ref={input}></input>
        </IonItem>
        <div className={styles.photoContainer}>
          {photoMarkup}
        </div>
        <IonButton href="/create-profile">Create Profile</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default UploadPhotos;
