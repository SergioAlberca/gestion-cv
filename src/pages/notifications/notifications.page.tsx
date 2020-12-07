import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonRow,
} from "@ionic/react";
import { notifications, close } from "ionicons/icons";
import React from "react";
import "./notifications.page.css";

const NotificationsPage: React.FC = () => {
  const truncateDescription = (text: string) => {
    return text.slice(0, 160) + "...";
  };

  return (
    <IonPage>
      <IonHeader>
        <div className="notification-header-container">
          <IonRow>
            <IonCol size="4" className="menu-icon-container">
              <IonMenuButton className="menu-icon" />
            </IonCol>
            <IonCol size="4" className="logo-icon-container">
            <IonIcon md={notifications} className="dashboard-item-icon"></IonIcon>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="title-container">
              Centro de notificaciones
            </IonCol>
          </IonRow>
        </div>
      </IonHeader>
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
