import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonChip,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import {
  personCircle,
  informationCircleSharp,
  documentOutline,
} from "ionicons/icons";
import React, { useState } from "react";
import "./account.css";

const AccountPage: React.FC = () => {
  const [segment, setSegment] = useState<any>("image");
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <IonPage>
      <IonHeader>
        <div className="account-header">
          <IonRow>
            <IonCol size="4" className="menu-icon-container">
              <IonMenuButton className="menu-icon" />
            </IonCol>
            <IonCol size="4" className="logo-icon-container">
              <IonIcon
                md={personCircle}
                className="dashboard-item-icon"
              ></IonIcon>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="title-container">
              Cuenta
            </IonCol>
          </IonRow>
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <div>
          <IonRow>
            <IonCol size="12">
              <IonSegment
                color="tertiary"
                value={segment}
                onIonChange={(e) => setSegment(e.detail.value)}
              >
                <IonSegmentButton value="image">
                  <IonLabel>Perfil</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="file">
                  <IonLabel>Cv en pdf</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="info-container">
              <IonChip color="tertiary" onClick={() => setShowInfo(true)}>
                <IonLabel>Info</IonLabel>
                <IonIcon icon={informationCircleSharp} />
              </IonChip>
            </IonCol>
          </IonRow>
          {/* Segmento Perfil */}
          {segment === "image" && (
            <IonRow>
              <IonCol size="12" className="avatar-container">
                <IonAvatar className="avatar-image">
                  <img src="https://firebasestorage.googleapis.com/v0/b/cv-sergio-alberca.appspot.com/o/Profile%20(1).jpg?alt=media&token=b2547b31-08c6-4bb0-84a4-716ba44b9630" />
                </IonAvatar>
              </IonCol>
              <IonCol size="12" className="avatar-container">
                <IonButton color="tertiary">Actualizar</IonButton>
              </IonCol>
            </IonRow>
          )}
          {/* Segmento Cv */}
          {segment === "file" && (
            <IonRow>
              <IonCol size="12" className="avatar-container">
                <IonAvatar className="avatar-image">
                  <IonIcon md={documentOutline} className="icon-file" />
                </IonAvatar>
              </IonCol>
              <IonCol size="12" className="avatar-container">
                <p>Sergio-Alberca.pdf</p>
              </IonCol>
              <IonCol size="12" className="avatar-container">
                <IonButton color="tertiary">Actualizar</IonButton>
              </IonCol>
            </IonRow>
          )}
        </div>

        <IonAlert
          isOpen={showInfo}
          onDidDismiss={() => setShowInfo(false)}
          cssClass="my-custom-class"
          header={"Info"}
          subHeader={"Cambia tu imagen de perfil"}
          message={
            "Cambia tu imagen de perfil para que esté disponible en tu CV online."
          }
        />
      </IonContent>
    </IonPage>
  );
};

export default AccountPage;
