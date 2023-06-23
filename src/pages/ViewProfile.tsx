import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import useLocalStorageState from 'use-local-storage-state';
import './Tab1.css';

const Profile: React.FC = () => {
  let [userName, setUserName] = useLocalStorageState('userName', { defaultValue: ''});
  let [photo, setPhoto] = useLocalStorageState('photo', { defaultValue: ''});
  let [recording, setRecording] = useLocalStorageState('recording', { defaultValue: ''});

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
