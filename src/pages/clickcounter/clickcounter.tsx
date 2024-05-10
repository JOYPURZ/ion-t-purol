import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './clickcounter.css';

const ClickCounter: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
      </IonButtons>
      <IonContent fullscreen>
        <div className="tab2-container">
          <p className="tab2-click-count">Click Count: {clickCount}</p>
          <button className="tab2-button" onClick={handleButtonClick}>Click me</button>
        </div>
      </IonContent> 
    </IonPage>
  );
};

export default ClickCounter;
