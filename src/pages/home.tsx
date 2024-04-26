import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import { pulseOutline, calculatorOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  const goToClickCounter = () => {
    history.push('/clickcounter');
  };

  const goToCalculator = () => {
    history.push('/calculator');
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        <hr />
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="ion-text-center"> {/* Centering content */}
          <IonCard onClick={goToClickCounter} style={{ width: '350px', cursor: 'pointer' }} color="primary">
            <IonCardContent style={{ fontSize: '30px' }}>
              <IonIcon icon={pulseOutline} slot="start" />
              Click Counter
            </IonCardContent>
          </IonCard>
  
  
          <IonCard onClick={goToCalculator} style={{ width: '350px', cursor: 'pointer' }} color="primary">
            <IonCardContent style={{ fontSize: '30px' }}>
              <IonIcon icon={calculatorOutline} slot="start" />
              Calculator
            </IonCardContent>
          </IonCard>
          
          <IonCard style={{ width: '350px' }} color="primary">
            <IonCardContent style={{ fontSize: '30px' }}>
              Blank
            </IonCardContent>
          </IonCard>
  
          <IonCard style={{ width: '350px' }} color="primary">
            <IonCardContent style={{ fontSize: '30px' }}>
              Blank
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
  
};

export default Home;