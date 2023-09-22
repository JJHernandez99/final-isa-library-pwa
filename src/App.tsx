import {Redirect, Route} from 'react-router-dom';
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
import {IonReactRouter} from '@ionic/react-router';
import {bookOutline, personOutline} from 'ionicons/icons';

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
import Page2 from './pages/Page2';
import Page1 from './pages/Page1';
import Page3 from './pages/Page3';

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/books">
                        <Page1/>
                    </Route>
                    <Route exact path="/authors">
                        <Page2/>
                    </Route>
                    <Route exact path="/publishers">
                        <Page3/>
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/books"/>
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="page1" href="/books">
                        <IonIcon aria-hidden="true" icon={bookOutline}/>
                        <IonLabel>Books</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="page2" href="/authors">
                        <IonIcon aria-hidden="true" icon={personOutline}/>
                        <IonLabel>Authors</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="page3" href="/publishers">
                        <IonIcon aria-hidden="true" icon={personOutline}/>
                        <IonLabel>Publishers</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App