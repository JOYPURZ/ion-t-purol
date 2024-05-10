import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton,
  IonActionSheet} from '@ionic/react';
import './profile.css';

const Profile: React.FC = () => {
  return (
    <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/img/avatar.png" />
      <IonCardHeader>
        <IonCardTitle>Purol, Joy</IonCardTitle>
        <IonCardSubtitle>Student</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>Here's a small text description for the card content.</IonCardContent>

      <IonButton id="present-alert" expand="full" >Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
      ></IonAlert>


      
    </IonCard>
  );
};
``
export default Profile;

