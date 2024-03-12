import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton, IonActionSheetadd } from '@ionic/react';
import './Tab1.css';

const Tab2: React.FC = () => {
  return (
    <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/img/avatar.png" />
      <IonCardHeader>
        <IonCardTitle>Purol, Joy</IonCardTitle>
        <IonCardSubtitle>Student</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content.</IonCardContent>
    </IonCard>
  );
};
``
export default Tab2;
