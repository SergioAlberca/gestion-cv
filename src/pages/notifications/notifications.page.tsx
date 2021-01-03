import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonPage,
} from "@ionic/react";
import { notifications, close } from "ionicons/icons";
import React from "react";
import Header from "../../components/header/header.component";
import { typePage } from "../../constants/constants";
import "./notifications.page.scss";

const NotificationsPage: React.FC = () => {
  const truncateDescription = (text: string) => {
    return text.slice(0, 160) + "...";
  };

  return (
    <IonPage>
      <Header
        type={typePage.notificaction}
        title="Centro de notificaciones"
        logo={
          <IonIcon md={notifications} className="dashboard-item-icon"></IonIcon>
        }
      ></Header>
      <IonContent fullscreen>
        <IonCard class="notification-item">
          <IonIcon
            md={close}
            className="notification-icon close-icon"
          ></IonIcon>
          <IonCardTitle className="notification-title-container">
            <IonIcon md={notifications} className="notification-icon"></IonIcon>
            Notificacion 1
          </IonCardTitle>
          <IonCardContent>
            {truncateDescription(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint sapiente corrupti, facilis voluptates dolores illum dicta deleniti nisi"
            )}
            <p className="notification-item-date">29/11/2020</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default NotificationsPage;
