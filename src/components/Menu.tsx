import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar } from '@ionic/react';
import useLocalStorageState from 'use-local-storage-state';

function Menu() {
  const [profileComplete] = useLocalStorageState('profileComplete', { defaultValue: false});

  return (
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sections</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ol>
          <li><a href="/manifest/">Manifest and SW</a></li>
          <li><a href="/profile/permissions">Permissions</a></li>
          <li><a href="/profile/geo">Geolocation</a></li>
          <li><a href="/profile/camera">Camera</a></li>
          <li><a href="/profile/upload">Upload Photos</a></li>
          <li><a href="/profile/voicerecording">Voice Recording</a></li>
          <li><a href="/profile/notifications">Notifications</a></li>
          {profileComplete &&
            <li><a href="/viewprofile">View Profile</a></li>
          }
        </ol>
      </IonContent>
    </IonMenu>
  );
}
export default Menu;
