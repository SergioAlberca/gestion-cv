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
  IonLoading,
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
import React, { useEffect, useState } from "react";
import "./account.css";
/* Plugins */
import { Chooser } from "@ionic-native/chooser";
import { Plugins, CameraResultType } from "@capacitor/core";
/* Services */
import { storage } from "../../config/firebase.config";
/* Utils */
import { b64toBlobTypePdf } from "../../utils/files-utils";
import {
  getFilesData,
  getImageProfile,
  setNameCvFile,
  setNameProfile,
} from "../../services/modify.service";

const AccountPage: React.FC = () => {
  const messageInfoCvFile = {
    message:
      "Actualiza tu plantilla de CV en formato pdf para que esté disponible en tu web online y otros usuarios puedan descargarlo.",
    title: "Actualiza tu plantilla de CV",
  };
  const messageInfoProfile = {
    message:
      "Actualiza tu imagen de perfil para que esté disponible en tu CV online.",
    title: "Actualiza tu imagen de perfil",
  };
  const { Camera } = Plugins;
  const [segment, setSegment] = useState<any>("image");
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [filesData, setFilesData] = useState<any>({});
  const [urlProfile, setUrlProfile] = useState<string>("");
  const [showLoading, setShowLoading] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setShowLoading(true);
    const data = await getFilesData();
    setFilesData(data);
    const imageProfile = await getImageProfile(data.name);
    setUrlProfile(imageProfile);
    setShowLoading(false);
  }

  async function takeFile() {
    try {
      setShowLoading(true);
      const file = await Chooser.getFile("application/pdf");
      if (file !== undefined) {
        storage
          .ref()
          .child(file.name)
          .put(b64toBlobTypePdf(file.dataURI, "application/pdf"))
          .then(() => {
            setNameCvFile(file.name).then(() => {
              setShowLoading(false);
              getData();
            });
          });
      }
    } catch (error) {
      console.log(error);
      setShowLoading(false);
    }
  }

  async function takePicture() {
    setShowLoading(true);
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });
      if (image !== undefined) {
        storage
          .ref()
          .child(`profile.${image.format}`)
          .put(b64toBlobTypePdf(image.dataUrl, "image/jpeg"))
          .then(() => {
            setNameProfile(`profile.${image.format}`).then(() => {
              setShowLoading(false);
              getData();
            });
          });
      }
    } catch (error) {
      setShowLoading(false);
      console.log(error);
    }
  }

  const getInfo = (type: string) => {
    return type === "image" ? messageInfoProfile : messageInfoCvFile;
  };

  return (
    <IonPage>
      <IonHeader>
        <div className="account-header">
          <IonLoading
            isOpen={showLoading}
            onDidDismiss={() => setShowLoading(false)}
            message={"Cargando..."}
          />
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
                  <img src={urlProfile} alt="" />
                </IonAvatar>
              </IonCol>
              <IonCol size="12" className="avatar-container">
                <IonButton color="tertiary" onClick={() => takePicture()}>
                  Actualizar
                </IonButton>
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
                <p>{filesData.nameCvFile}</p>
              </IonCol>
              <IonCol size="12" className="avatar-container">
                <IonButton color="tertiary" onClick={() => takeFile()}>
                  Actualizar
                </IonButton>
              </IonCol>
            </IonRow>
          )}
        </div>

        <IonAlert
          isOpen={showInfo}
          onDidDismiss={() => setShowInfo(false)}
          cssClass="my-custom-class"
          header={"Info"}
          subHeader={getInfo(segment).title}
          message={getInfo(segment).message}
        />
      </IonContent>
    </IonPage>
  );
};

export default AccountPage;
