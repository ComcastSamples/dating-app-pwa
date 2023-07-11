import React, { useEffect, useState } from 'react';
import { cloudOffline, cloudDone } from 'ionicons/icons';
import { IonPage, IonHeader, IonContent,
  IonToolbar, IonTitle, IonIcon, IonMenuButton, IonButtons
} from '@ionic/react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const ManifestWelcome: React.FC = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online',  () => setOnline(true));
    window.addEventListener('offline', () => setOnline(false));
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={online ? "" : "medium"}>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Make PWA Installable</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Menu></Menu>
      <IonContent class="ion-padding" id="main-content">
        <h1>
          Manifest
        </h1>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members" target="_blank" rel="noreferrer">Manifest Intro: Making PWAs installable</a></li>
          <li><a href="https://web.dev/add-manifest/" target="_blank" rel="noreferrer">Manifest Details: Add a web app manifest</a></li>
        </ul>
        <p>
          We're going to create a Dating App for Cats using the latest web technologies. First thing we need to
          do is make sure our app is a PWA! Ionic Starter Kit created our <code>manifest.json</code> file for us in the root of the <code>public</code> folder, so we'll just make a few tweaks by adding / updating:
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
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers#responding_to_fetches" target="_blank" rel="noreferrer">Service Workers Tutorial: Making PWAs work offline with Service workers</a></li>
        </ul>
        <p>
          For service workers, the we need to respond to <code>fetch</code> requests so we can return locally cached files when we're offline. Edit <code>service-worker.js</code> in the public folder to handle <code>fetch</code> requests. Check to make sure it works by reloading and toggling offline mode in your browser's Developer Tools.
        </p>
        <p>
          Note that the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self" target="_blank" rel="noreferrer"><code>self</code> property</a> you will see referenced in Service Worker code is a read-only property of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope" target="_blank" rel="noreferrer"><code>ServiceWorkerGlobalScope</code> interface</a> that returns a reference to the <code>ServiceWorkerGlobalScope</code> itself.
        </p>
        <p>
          If the service worker is set up properly, then when the connection is offline, the top bar of this page will change to grey and the cloud icon for the Service Workers header will lose its checkmark.
        </p>
      </IonContent>
      <Footer prev='' next='/profile/permissions'></Footer>
    </IonPage>
  );
};

export default ManifestWelcome;
