import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonChip } from '@ionic/react';
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
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
