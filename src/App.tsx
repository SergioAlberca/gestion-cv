import React from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import NotificationsPage from "./pages/notifications/notifications.page";
import AddPage from "./pages/add/add.page";
import AccountPage from "./pages/account/account.page";
import Menu from "./components/menu/Menu";
import Dashboard from "./pages/dashboard/dashboard";
import ModifyPage from "./pages/modify/modify.page";

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/notifications" component={NotificationsPage} exact />
            <Route path="/add" component={AddPage} exact />
            <Route path="/account" component={AccountPage} exact />
            <Route path="/modify" component={ModifyPage} exact />
            <Redirect from="/" to="/dashboard" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
