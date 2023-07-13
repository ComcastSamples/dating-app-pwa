import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonChip } from '@ionic/react';
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
      <IonContent>
        <IonList>
          <IonItem href="/manifest/">
            <IonChip slot="start">1</IonChip>
            <IonLabel>Manifest and SW</IonLabel>
          </IonItem>
          <IonItem href="/profile/permissions">
            <IonChip slot="start">2</IonChip>
            <IonLabel>Permissions</IonLabel>
          </IonItem>
          <IonItem href="/profile/geo">
            <IonChip slot="start">3</IonChip>
            <IonLabel>Geolocation</IonLabel>
          </IonItem>
          <IonItem href="/profile/camera">
            <IonChip slot="start">4</IonChip>
            <IonLabel>Camera</IonLabel>
          </IonItem>
          <IonItem href="/profile/upload">
            <IonChip slot="start">5</IonChip>
            <IonLabel>Upload Photos</IonLabel>
          </IonItem>
          <IonItem href="/profile/voicerecording">
            <IonChip slot="start">6</IonChip>
            <IonLabel>Voice Recording</IonLabel>
          </IonItem>
          <IonItem href="/profile/notifications">
            <IonChip slot="start">7</IonChip>
            <IonLabel>Notifications</IonLabel>
          </IonItem>
          {profileComplete &&
            <IonItem href="/viewprofile">
              <IonChip slot="start">*</IonChip>
              <IonLabel>View Profile</IonLabel>
            </IonItem>
          }
        </IonList>
      </IonContent>
    </IonMenu>
  );
}
export default Menu;
