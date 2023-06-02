import styles from './Login.module.css';
import { IonContent, IonButton } from '@ionic/react';

const Login = (props: any) => {
  return (
    <IonContent className={styles.content}>
      <video height="100%" playsInline autoPlay muted className={styles.videoSplash}>
        <source src="/assets/splash.mp4" type="video/mp4" />
      </video>
      <h2 className={styles.header}>Finge</h2>
      <p className={styles.tagline}>Dating for felines</p>
      <IonButton
        className="button"
        shape="round"
        onClick={(e) => { e.preventDefault(); props.setAuth(true) }} href="/get-started">
          Get Started
      </IonButton>
    </IonContent>
  );
};

export default Login;
