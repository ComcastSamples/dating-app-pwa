import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem } from '@ionic/react';
import useLocalStorageState from 'use-local-storage-state';
import './Tab1.css';

const Profile: React.FC = () => {
  let [userName] = useLocalStorageState('userName', { defaultValue: ''});
  let [location] = useLocalStorageState('location', { defaultValue: ''});
  let [photo] = useLocalStorageState('photo', { defaultValue: ''});
  let [recording] = useLocalStorageState('recording', { defaultValue: ''});

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>View your Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        <IonItem>
          <h2>🐾 {userName}</h2>
        </IonItem>
        <IonItem>
          <h4>📍 {location}</h4>
        </IonItem>
        <IonItem>
          <div className="media">
            <img src={photo} aria-hidden alt="Profile Photo" />
          </div>
        </IonItem>
        <IonItem>
          <div className="media">
            <audio controls>
              { recording && <source type="audio/webm" src={recording} /> }
            </audio>
          </div>
        </IonItem>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
