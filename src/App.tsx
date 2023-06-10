import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, logoOctocat} from 'ionicons/icons';
import Login from './pages/Login';
import ManifestWelcome from './pages/Manifest/';
import ProfileWelcome from './pages/CreateProfile/';
import Permissions from './pages/CreateProfile/Permissions';
import Camera from './pages/CreateProfile/Camera';
import UploadPhotos from './pages/CreateProfile/UploadPhotos';
import VoiceRecording from './pages/CreateProfile/VoiceRecording';
import Geo from './pages/CreateProfile/Geo';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [authed, setAuth] = useLocalStorageState('authed', { defaultValue: false});
  const [profileComplete, setProfileComplete] = useState(false);

  if (!authed) {
    return <IonApp>
        <Login setAuth={setAuth} />
      </IonApp>
  }

  if (!profileComplete) {
    return <IonApp>
            <IonReactRouter>
              <IonRouterOutlet>
                <Route exact path="/manifest/">
                  <ManifestWelcome />
                </Route>
                <Route exact path="/profile/">
                  <ProfileWelcome />
                </Route>
                <Route exact path="/profile/permissions">
                  <Permissions />
                </Route>
                <Route exact path="/profile/geo">
                  <Geo />
                </Route>
                <Route exact path="/profile/camera">
                  <Camera />
                </Route>
                <Route exact path="/profile/upload">
                  <UploadPhotos />
                </Route>
                <Route exact path="/profile/voicerecording">
                  <VoiceRecording />
                </Route>
                <Route exact path="/profile/complete"
                  render={() => {
                    setProfileComplete(true);
                    return <Redirect to="/" />}
                  }>
                </Route>
                <Redirect exact from="/" to="/manifest/"></Redirect>
                <Route render={() => <Redirect to="/profile/" />} />
              </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
  }

  return (<IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route exact path="/tab3">
              <Tab3 />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" hidden>
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={logoOctocat} />
              <IonLabel>Tab 1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={ellipse} />
              <IonLabel>Tab 2</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={square} />
              <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>);
  };

export default App;
