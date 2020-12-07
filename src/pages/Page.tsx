import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonRow,
} from "@ionic/react";
import { analytics, create, notifications, personCircle } from "ionicons/icons";
import React from "react";
import "./Page.css";
import logo from "../assets/images/logo.svg";
import { useHistory } from "react-router-dom";

const Page: React.FC = () => {
  let history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <div className="dashboard-header">
          <IonRow>
            <IonCol size="4" className="menu-icon-container">
              <IonMenuButton className="menu-icon" />
            </IonCol>
            <IonCol size="4" className="logo-icon-container">
              <img src={logo} alt="" className="logo" />
            </IonCol>
            <IonCol size="4" className="notification-icon-container">
              <IonIcon
                md={notifications}
                className="notification-icon"
                onClick={() => history.push("/notifications")}
              ></IonIcon>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="title-container">
              Gestion Cv
            </IonCol>
          </IonRow>
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <div className="dashboard-container">
          <IonRow>
            <IonCol size="6">
              <IonCard className="dashboard-item dashboard-item-1">
                <IonCardHeader>
                  <IonIcon
                    md={analytics}
                    className="dashboard-item-icon"
                  ></IonIcon>
                </IonCardHeader>
                <IonCardContent>Estadísticas</IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard className="dashboard-item dashboard-item-2" onClick={() => history.push("/account")}>
                <IonCardHeader>
                  <IonIcon
                    md={personCircle}
                    className="dashboard-item-icon"
                  ></IonIcon>
                </IonCardHeader>
                <IonCardContent>Cuenta</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonCard className="dashboard-item-3" onClick={() => history.push("/modify")}>
                <IonCardHeader>
                  <IonIcon
                    md={create}
                    className="dashboard-item-icon"
                  ></IonIcon>
                </IonCardHeader>
                <IonCardContent>
                  <h3>Modificar CV</h3>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
