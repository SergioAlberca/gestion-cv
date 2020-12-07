import {
  IonButton,
  IonCol,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRange,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonTextarea,
} from "@ionic/react";
import { create, sunny } from "ionicons/icons";
import React, { useState } from "react";
import "./modify.css";

const ModidyCv: React.FC = () => {
  const [segment, setSegment] = useState<any>("skill");

  return (
    <IonPage>
      {" "}
      <IonHeader>
        <div className="modify-header">
          <IonRow>
            <IonCol size="4" className="menu-icon-container">
              <IonMenuButton className="menu-icon" />
            </IonCol>
            <IonCol size="4" className="logo-icon-container">
              <IonIcon md={create} className="dashboard-item-icon"></IonIcon>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="title-container">
              Sección Añadir
            </IonCol>
          </IonRow>
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <IonRow>
          <IonCol size="12">
            <IonSegment
              color="tertiary"
              value={segment}
              onIonChange={(e) => setSegment(e.detail.value)}
            >
              <IonSegmentButton value="skill">
                <IonLabel>Habilidades</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="experience">
                <IonLabel>Experiencia</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="education">
                <IonLabel>Formación</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonCol>
        </IonRow>
        <div className="container-forms">
          {/* Formulario Habilidades */}
          {segment === "skill" && (
            <IonRow className="form-container">
              <IonCol size="12" className="form-item">
                <IonItem>
                  <IonLabel position="floating">Nombre de habilidad</IonLabel>
                  <IonInput value={""}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol size="12">
                <IonLabel>Porcentaje</IonLabel>
                <IonItem>
                  <IonRange min={20} max={80} pin color="tertiary">
                    <IonIcon size="small" slot="start" icon={sunny} />
                    <IonIcon size="small" slot="end" icon={sunny} />
                  </IonRange>
                </IonItem>
              </IonCol>
              <IonCol className="save-button-container">
                <IonButton color="tertiary">Guardar</IonButton>
              </IonCol>
            </IonRow>
          )}
          {/* Formulario Experiencia */}
          {segment === "experience" && (
            <IonRow className="form-container">
              <IonCol size="12" className="form-item">
                <IonItem>
                  <IonLabel position="floating">Puesto</IonLabel>
                  <IonInput value={""}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol size="12" className="form-item">
                <IonItem>
                  <IonLabel position="floating">Empresa</IonLabel>
                  <IonInput value={""}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol size="12" className="form-item">
                <IonItem>
                  <IonLabel position="floating">Descripcion</IonLabel>
                  <IonTextarea value={""}></IonTextarea>
                </IonItem>
              </IonCol>
              <IonCol size="12" className="form-item">
                <IonItem>
                  <IonLabel position="floating">Comienzo</IonLabel>
                  <IonDatetime></IonDatetime>
                </IonItem>
              </IonCol>
              <IonCol size="12" className="form-item">
                <IonItem>
                  <IonLabel position="floating">Fin</IonLabel>
                  <IonDatetime></IonDatetime>
                </IonItem>
              </IonCol>
              <IonCol size="12" className="save-button-container">
                <IonButton color="tertiary">Guardar</IonButton>
              </IonCol>
            </IonRow>
          )}
          {/* Formulario Education */}
          {segment === "education" && (
            <IonRow className="form-container">
              <IonCol size="12" className="form-item">
                <IonItem>
                  <IonLabel position="floating">Título</IonLabel>
                  <IonInput value={""}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol size="12" className="form-item">
                <IonItem>
                  <IonLabel position="floating">Centro</IonLabel>
                  <IonInput value={""}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol size="12" className="form-item">
                <IonItem>
                  <IonLabel position="floating">Descripcion</IonLabel>
                  <IonTextarea value={""}></IonTextarea>
                </IonItem>
              </IonCol>
              <IonCol size="12" className="form-item">
                <IonItem>
                  <IonLabel position="floating">Comienzo</IonLabel>
                  <IonDatetime></IonDatetime>
                </IonItem>
              </IonCol>
              <IonCol size="12" className="form-item">
                <IonItem>
                  <IonLabel position="floating">Fin</IonLabel>
                  <IonDatetime></IonDatetime>
                </IonItem>
              </IonCol>
              <IonCol className="save-button-container form-item" >
                <IonButton color="tertiary">Guardar</IonButton>
              </IonCol>
            </IonRow>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};
export default ModidyCv;
