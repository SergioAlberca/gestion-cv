import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  notifications,
  personCircle,
  podiumOutline,
  add,
  create,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    iosIcon: podiumOutline,
    mdIcon: podiumOutline,
  },
  {
    title: "Notificaciones",
    url: "/notifications",
    iosIcon: notifications,
    mdIcon: notifications,
  },
  {
    title: "Añadir",
    url: "/add",
    iosIcon: add,
    mdIcon: add,
  },
  {
    title: "Cuenta",
    url: "/account",
    iosIcon: personCircle,
    mdIcon: personCircle,
  },
  {
    title: "Modificar",
    url: "/modify",
    iosIcon: create,
    mdIcon: create,
  },
];

const Menu = () => {
  const location = useLocation();
  let history = useHistory();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  // routerLink={appPage.url}
                  onClick={() => history.push(appPage.url)}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
