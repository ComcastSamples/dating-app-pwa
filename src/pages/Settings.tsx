import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>
          In case you want to go back to any of the profile stuff.
        </p>
        <ol>
          <li><a href="/manifest/">Manifest and SW</a></li>
          <li><a href="/profile/permissions">Permissions</a></li>
          <li><a href="/profile/geo">Geolocation</a></li>
          <li><a href="/profile/camera">Camera</a></li>
          <li><a href="/profile/upload">Upload Photos</a></li>
          <li><a href="/profile/voicerecording">Voice Recording</a></li>
          <li><a href="/profile/notifications">Notifications</a></li>
        </ol>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
