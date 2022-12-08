import './Login.css';
import React from 'react';
import { IonButton } from '@ionic/react';
const Login: React.FC = () => {
  return (
    <React.Fragment>
      <h2 className="h2">Welcome to the PWA Workshop!</h2>
      <IonButton shape="round" href="/get-started">Get Started</IonButton>
    </React.Fragment>
  );
};

export default Login;
