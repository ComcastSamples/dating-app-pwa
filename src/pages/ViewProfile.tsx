import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import useLocalStorageState from 'use-local-storage-state';
import './Tab1.css';

const Profile: React.FC = () => {
  let [userName] = useLocalStorageState('userName', { defaultValue: ''});
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
        <h2>{userName}</h2>
        <img src={photo} alt="The photo of you" />

        <audio controls>
          { recording && <source type="audio/wav" src={recording} /> }
        </audio>
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
