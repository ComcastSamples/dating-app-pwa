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
import useLocalStorageState from 'use-local-storage-state';
import { IonReactRouter } from '@ionic/react-router';
import { personCircleOutline, logoOctocat, settingsOutline } from 'ionicons/icons';
import Login from './pages/Login';
import ManifestWelcome from './pages/Manifest/';
import Permissions from './pages/CreateProfile/Permissions';
import Camera from './pages/CreateProfile/Camera';
import UploadPhotos from './pages/CreateProfile/UploadPhotos';
import VoiceRecording from './pages/CreateProfile/VoiceRecording';
import Geo from './pages/CreateProfile/Geo';
import Notifications from './pages/CreateProfile/Notifications';
import ViewProfile from './pages/ViewProfile';
import Cats from './pages/Cats';
import Settings from './pages/Settings';
import Menu from './components/Menu';

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

/* Overall app styles */
import './theme/styles.css';

setupIonicReact();

const App: React.FC = () => {
  const [authed, setAuth] = useLocalStorageState('authed', { defaultValue: false});
  const [profileComplete, setProfileComplete] = useLocalStorageState('profileComplete', { defaultValue: false});

  if (!authed) {
    return <IonApp>
        <Login setAuth={setAuth} />
      </IonApp>
  }

  return (<IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/viewprofile">
              <ViewProfile />
            </Route>
            <Route exact path="/cats">
              <Cats />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" hidden>
            <IonTabButton tab="viewprofile" href="/viewprofile">
              <IonIcon icon={personCircleOutline} />
              <IonLabel>View Profile</IonLabel>
            </IonTabButton>
            <IonTabButton tab="cats" href="/cats">
              <IonIcon icon={logoOctocat} />
              <IonLabel>Cute Cats</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonIcon icon={settingsOutline} />
              <IonLabel>Setup</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
        <div id="main-content"></div>

        <Route exact path="/manifest/">
          <ManifestWelcome />
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
        <Route exact path="/profile/notifications">
          <Notifications />
        </Route>
        <Menu></Menu>

        <Route exact path="/profile/complete"
          render={() => {
            setProfileComplete(true);
            return <Redirect to="/viewprofile" />}
          }>
        </Route>
        <Route exact path="/" render={() => {
            if (profileComplete) {
              return <Redirect to="/viewprofile" />
            }
            return <Redirect to="/manifest/" />
          }
        } />

      </IonReactRouter>
    </IonApp>);
  };

export default App;
