import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cute Cats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        <h3>Meet Zhang</h3>
        <img src="../assets/cats/zhang.jpg" alt="one cute cat" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
