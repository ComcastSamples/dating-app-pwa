import React from 'react';
import { IonFooter, IonToolbar, IonButtons, IonButton } from '@ionic/react';

interface FooterProps {
  prev: string;
  next: string;
}

const Footer: React.FC<FooterProps> = ({ prev, next }) => {
  return (
    <IonFooter>
      <IonToolbar>
        {prev && (
          <IonButtons slot="start">
            <IonButton fill="solid" routerLink={prev} routerDirection="back">Prev</IonButton>
          </IonButtons>
        )}
        {next && (
          <IonButtons slot="end">
            <IonButton fill="solid" routerLink={next} routerDirection="forward">Next</IonButton>
          </IonButtons>
        )}
      </IonToolbar>
    </IonFooter>
  );
}

export default Footer;
