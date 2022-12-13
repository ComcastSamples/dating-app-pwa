import './Geo.css';
import React, { useState } from 'react';
import { IonPage, IonHeader, IonButton, IonContent,
  IonToolbar, IonTitle, IonInput, IonItem, IonLabel,
  IonSpinner
} from '@ionic/react';
import Geo from './work/geo.js';

const Login: React.FC = () => {
  let [location, setLocation] = useState('');
  let [loading, setLoading] = useState(false);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Cats in your Area</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <p>
            Starting off simple with Name and Location using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API">Geolocation API</a>
            <br />
            You'll do your work in the 'work/geo.js' file.
          </p>
        </IonItem>
        <IonItem>
          <IonLabel>Your Name</IonLabel>
          <IonInput placeholder="Name"></IonInput>
        </IonItem>
        {loading && <IonSpinner></IonSpinner>}

        {!loading && location && <IonItem>{location}</IonItem>}


        {!loading && !location && <IonButton className="button" shape="round"
          onClick={(e) => {
            e.preventDefault();
            setLoading(true);
            Geo.getLocation().then(
              (location: any) => {
                console.log(location);
                let {address} = location;
                setLocation(`${address.city}, ${address.state}`);
                setLoading(false);
              })
          }}>
            Get Location
        </IonButton>}
      </IonContent>
    </IonPage>
  );
};

export default Login;
