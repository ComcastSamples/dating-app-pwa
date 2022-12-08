import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import kipp from '../images/kipp.jpg';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h2>Kipp</h2>
        <img src={kipp} alt="Kipp" />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
