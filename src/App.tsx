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
import { IonReactRouter } from '@ionic/react-router';
import { calculatorOutline, ellipse, home, personOutline, speedometerOutline, square, triangle } from 'ionicons/icons';

// Home resources
import Home from './pages/home';

import Profile from './pages/profile/profile';
import ClickCounter from './pages/clickcounter/clickcounter'; 
import Calculator from './pages/calculator/calculator';
import Todolist from './pages/todolist/todolist';
import QuotesGenerator from './pages/quotegenerator/quotesgenerator';
import Notes from './pages/notes/notes';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          
          {/* Application default route */}
          <Route exact path="/ion-t-purol/">
            <Redirect to="/ion-t-purol/home" />
          </Route>

          {/* Home Router */}
          <Route exact path="/ion-t-purol/home">
            <Home />
          </Route>

          <Route exact path="/ion-t-purol/profile">
            <Profile />
          </Route>

          <Route exact path="/ion-t-purol/home/clickcounter">
            <ClickCounter />
          </Route>
          <Route path="/ion-t-purol/home/calculator">
            <Calculator />
          </Route>

          <Route path="/ion-t-purol/home/todolist">
            <Todolist />
          </Route>

          <Route path="/ion-t-purol/home/quotesgenerator">
            <QuotesGenerator />
          </Route>

          <Route path="/ion-t-purol/home/notes">
            <Notes />
          </Route>

        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {/* Home Tab Button */}
          <IonTabButton tab="home" href="/ion-t-purol/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/ion-t-purol/profile">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
            {/*
          <IonTabButton tab="clickcounter" href="/clickcounter">
            <IonIcon aria-hidden="true" icon={speedometerOutline} />
            <IonLabel>Click Counter</IonLabel>
          </IonTabButton>
        
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={calculatorOutline} />
            <IonLabel>Calculator</IonLabel>
          </IonTabButton>
           */}
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;