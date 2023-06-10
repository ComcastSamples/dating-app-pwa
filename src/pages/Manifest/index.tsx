import React, { useEffect, useState } from 'react';
import { cloudOffline, cloudDone } from 'ionicons/icons';
import { IonPage, IonHeader, IonButton, IonContent,
  IonToolbar, IonTitle, IonIcon
} from '@ionic/react';

const ManifestWelcome: React.FC = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online',  () => setOnline(true));
    window.addEventListener('offline', () => setOnline(false));
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Make PWA Installable</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>
          Manifest
        </h1>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members" target="_blank" rel="noreferrer">Manifest</a></li>
          <li><a href="https://web.dev/add-manifest/" target="_blank" rel="noreferrer">Manifest details</a></li>
        </ul>
        <p>
          We're going to create a Dating App for Cats using the latest web technologies. First thing we need to
          do is make sure our app is a PWA! Ionic starter kit created our manifest file for us, so we'll just make a few tweaks by adding / updating:
        </p>
        <pre>
          <code>
          "theme_color": "#E2692D", <br />
          "background_color": "#13495E"
          </code>
        </pre>
        Feel free to change whatever other values you want in the file (or use your own colors).

        <h2>Service Workers <IonIcon icon={online ? cloudDone : cloudOffline} style={{verticalAlign: 'middle'}}></IonIcon></h2>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers#responding_to_fetches" target="_blank" rel="noreferrer">Service Workers Tutorial</a></li>
        </ul>
        <p>
          For service workers we just need to respond to the fetch request, so we can return files when we're offline. Edit service-worker.js in public folder to handle fetch requests. Check to make sure it works by reloading and toggling offline mode.
        </p>
          <IonButton routerLink="/profile/" routerDirection="forward">Get started with Profiles</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ManifestWelcome;
