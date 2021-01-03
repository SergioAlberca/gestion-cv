import {
  IonHeader,
  IonRow,
  IonCol,
  IonMenuButton,
  IonIcon,
} from "@ionic/react";
import { notifications } from "ionicons/icons";
import React from "react";
import "./header.component.scss";

interface headerProps {
  type: string;
  title: string;
  logo: any;
  pushRoute?: any;
}

const Header = (props: headerProps) => {
  return (
    <IonHeader>
      <div className={"header " + props.type}>
        <IonRow>
          <IonCol size="4" className="menu-icon-container">
            <IonMenuButton className="menu-icon" />
          </IonCol>
          {props.type === "dashboard" ? (
            <IonCol size="4" className="logo-icon-container">
              <img src={props.logo} alt="" className="logo" />
            </IonCol>
          ) : (
            <IonCol size="4" className="logo-icon-container">
              {props.logo}
            </IonCol>
          )}
          {props.type === "dashboard" && (
            <IonCol size="4" className="notification-icon-container">
              <IonIcon
                md={notifications}
                className="notification-icon"
                onClick={() => props.pushRoute()}
              ></IonIcon>
            </IonCol>
          )}
        </IonRow>
        <IonRow>
          <IonCol size="12" className="title-container">
            {props.title}
          </IonCol>
        </IonRow>
      </div>
    </IonHeader>
  );
};

export default Header;
