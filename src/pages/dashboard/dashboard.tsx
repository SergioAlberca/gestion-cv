import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonIcon,
  IonPage,
  IonRow,
} from "@ionic/react";
import { analytics, create, personCircle } from "ionicons/icons";
import React from "react";
/* Css */
import "./dashboard.css";
/* Logo */
import logo from "../../assets/images/logo.svg";
/* History */
import { useHistory } from "react-router-dom";
/* Components */
import Header from "../../components/header/header.component";
import { typePage } from "../../constants/constants";

const Dashboard: React.FC = () => {
  let history = useHistory();
  return (
    <IonPage>
      <Header
        type={typePage.dashboard}
        title="Gestión Cv"
        pushRoute={() => history.push("/notifications")}
        logo={logo}
      ></Header>
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
              <IonCard
                className="dashboard-item dashboard-item-2"
                onClick={() => history.push("/account")}
              >
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
              <IonCard
                className="dashboard-item-3"
                onClick={() => history.push("/add")}
              >
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

export default Dashboard;
