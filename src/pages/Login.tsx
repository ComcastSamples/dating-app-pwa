import './Login.css';
import React from 'react';
import { IonButton } from '@ionic/react';

const Login = (props: any) => {
  return (
    <div className="container">
      <h2 className="h2">Welcome to the PWA Workshop!</h2>
      <IonButton className="button" shape="round" onClick={(e) => { e.preventDefault(); props.setAuth(true) }} href="/get-started">Get Started</IonButton>
    </div>
  );
};

export default Login;
