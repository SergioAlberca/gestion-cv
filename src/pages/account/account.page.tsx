import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonChip,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonLoading,
  IonMenuButton,
  IonPage,
  IonRow,
} from "@ionic/react";
import { document, personAdd, create, arrowBack } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import "./account.page.scss";
/* Plugins */
import { Chooser } from "@ionic-native/chooser";
import { Plugins, CameraResultType } from "@capacitor/core";
/* Services */
import { storage } from "../../config/firebase.config";
import {
  getFilesData,
  getImageProfile,
  setNameCvFile,
  setNameProfile,
} from "../../services/add.service";
import { getPersonalData } from "../../services/personalData.service";
/* Utils */
import { b64toBlobTypePdf } from "../../utils/files-utils";
import { truncate } from "../../utils/functions-utils";
import { useHistory } from "react-router-dom";

const AccountPage = () => {
  let history = useHistory();
  const { Camera } = Plugins;
  const [filesData, setFilesData] = useState<any>({});
  const [personalData, setPersonalData] = useState<any>({});
  const [urlProfile, setUrlProfile] = useState<string>("");
  const [showLoading, setShowLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log("entro");
    getData();
    return () => {
      console.log("jajajajajj");
    };
  }, []);

  async function getData() {
    try {
      setShowLoading(true);
      let values = await Promise.all([getFilesData(), getPersonalData()]);
      setFilesData(values[0]);
      setPersonalData(values[1]);
      const imageProfile = await getImageProfile(values[0].name);
      setUrlProfile(imageProfile);
      setShowLoading(false);
    } catch (err) {
      console.log(err);
      setShowLoading(false);
    }
  }

  async function takeFile() {
    try {
      const file = await Chooser.getFile("application/pdf");
      if (file !== undefined) {
        setShowLoading(true);
        await storage
          .ref()
          .child(file.name)
          .put(b64toBlobTypePdf(file.dataURI, "application/pdf"));
        await setNameCvFile(file.name);
        setShowLoading(false);
        getData();
      }
    } catch (error) {
      console.log(error);
      setShowLoading(false);
    }
  }

  async function takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      }).catch((err) => {
        setShowLoading(false);
      });
      if (image !== undefined) {
        setShowLoading(true);
        await storage
          .ref()
          .child(`profile.${image.format}`)
          .put(b64toBlobTypePdf(image.dataUrl, "image/jpeg"));
        await setNameProfile(`profile.${image.format}`);
        setShowLoading(false);
        getData();
      }
    } catch (error) {
      setShowLoading(false);
      console.log(error);
    }
  }

  return (
    <IonPage>
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Cargando..."}
      />
      <IonContent>
        <IonRow>
          <IonCol size="12" className="header-container">
            <div className="header-account">
              <IonRow>
                <IonCol size="12" className="menu-icon-container">
                  <IonIcon
                    md={arrowBack}
                    className="back-icon"
                    onClick={() => history.goBack()}
                  />
                </IonCol>
              </IonRow>
              <IonCol size="12" className="avatar-container">
                <IonAvatar className="avatar-image">
                  <img src={urlProfile} alt="" />
                </IonAvatar>
              </IonCol>
              <h3 className="text-personal-data">
                {personalData.name} {personalData.surname}{" "}
                {personalData.surname2}
              </h3>
              <h5 className="text-personal-data">{personalData.employment}</h5>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12">
            {personalData && personalData.description && (
              <IonCard className="description-card">
                <IonCardContent>
                  {truncate(personalData.description, 265)}
                </IonCardContent>
              </IonCard>
            )}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="6" style={{ textAlign: "center" }}>
            <IonChip
              className="icon-image"
              color="tertiary"
              onClick={() => takePicture()}
            >
              <IonIcon md={personAdd} className="icon-chip" />
              <IonLabel color="tertiary">Actualizar Perfil</IonLabel>
            </IonChip>
          </IonCol>
          <IonCol size="6" style={{ textAlign: "center" }}>
            <IonChip
              className="icon-image"
              color="primary"
              onClick={() => takeFile()}
            >
              <IonIcon md={create} className="icon-chip" />
              <IonLabel color="tertiary">Actualizar Cv</IonLabel>
            </IonChip>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12">
            <IonItem style={{ marginTop: 20 }}>
              <IonIcon md={document} className="icon-file" />
              <IonLabel>{filesData.nameCvFile}</IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default AccountPage;
