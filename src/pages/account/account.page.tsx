import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonChip,
  IonCol,
  IonContent,
  IonIcon,
  IonLabel,
  IonLoading,
  IonPage,
  IonRow,
} from "@ionic/react";
import {
  personCircle,
  informationCircleSharp,
  documentOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import "./account.page.scss";
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
} from "../../services/add.service";
import Header from "../../components/header/header.component";
import Tabs from "../../components/tabs/tabs.component";
import {
  dataSegmentAccountPage,
  messageInfoCvFileAccountPage,
  messageInfoProfileAccountPage,
  typeKeySections,
  typePage,
} from "../../constants/constants";

const AccountPage: React.FC = () => {
  const { Camera } = Plugins;
  const [segment, setSegment] = useState<any>(typeKeySections.image);
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
    return type === typeKeySections.image
      ? messageInfoProfileAccountPage
      : messageInfoCvFileAccountPage;
  };

  return (
    <IonPage>
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Cargando..."}
      />
      <Header
        type={typePage.account}
        title="Cuenta"
        logo={
          <IonIcon md={personCircle} className="dashboard-item-icon"></IonIcon>
        }
      ></Header>
      <IonContent fullscreen>
        <div>
          <IonRow>
            <IonCol size="12">
              <Tabs
                data={dataSegmentAccountPage}
                segment={segment}
                setSegment={setSegment}
                color="tertiary"
              ></Tabs>
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
          {segment === typeKeySections.image && (
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
          {segment === typeKeySections.file && (
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
