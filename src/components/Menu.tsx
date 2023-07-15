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
          <IonItem routerLink="/manifest/">
            <IonChip slot="start">1</IonChip>
            <IonLabel>Manifest and SW</IonLabel>
          </IonItem>
          <IonItem routerLink="/profile/permissions">
            <IonChip slot="start">2</IonChip>
            <IonLabel>Permissions</IonLabel>
          </IonItem>
          <IonItem routerLink="/profile/geo">
            <IonChip slot="start">3</IonChip>
            <IonLabel>Geolocation</IonLabel>
          </IonItem>
          <IonItem routerLink="/profile/camera">
            <IonChip slot="start">4</IonChip>
            <IonLabel>Camera</IonLabel>
          </IonItem>
          <IonItem routerLink="/profile/upload">
            <IonChip slot="start">5</IonChip>
            <IonLabel>Upload Photos</IonLabel>
          </IonItem>
          <IonItem routerLink="/profile/voicerecording">
            <IonChip slot="start">6</IonChip>
            <IonLabel>Voice Recording</IonLabel>
          </IonItem>
          <IonItem routerLink="/profile/notifications">
            <IonChip slot="start">7</IonChip>
            <IonLabel>Notifications</IonLabel>
          </IonItem>
          {profileComplete &&
            <IonItem routerLink="/viewprofile">
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
