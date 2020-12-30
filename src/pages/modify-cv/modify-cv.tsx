import {
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
  IonToast,
} from "@ionic/react";
import { create } from "ionicons/icons";
import React, { useState } from "react";
/* Interfaces */
import { skill } from "../../interfaces/skills.interface";
import { experience } from "../../interfaces/experience.interface";
import { formation } from "../../interfaces/formation.skill";
/* Services */
import {
  setExperiences,
  setFormations,
  setSkills,
} from "../../services/modify.service";
/* Views */
import AddExperienceView from "../../views/add-experience/add-experience.view";
import AddFormationView from "../../views/add-formation/add-formartion.view";
import AddSkillsView from "../../views/add-skills/add-skills.view";
import "./modify.css";

const ModidyCv: React.FC = () => {
  const [segment, setSegment] = useState<any>("skill");
  const [loading, setLoading] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const setSkill = (data: skill) => {
    setLoading(true);
    setSkills(data)
      .then(() => {
        setLoading(false);
        setShowToast(true);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const setExperience = (data: experience) => {
    setLoading(true);
    setExperiences(data)
      .then(() => {
        setLoading(false);
        setShowToast(true);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const setFormation = (data: formation) => {
    setLoading(true);
    setFormations(data)
      .then(() => {
        setLoading(false);
        setShowToast(true);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

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
            <AddSkillsView loading={loading} setSkill={setSkill} />
          )}
          {/* Formulario Experiencia */}
          {segment === "experience" && (
            <AddExperienceView
              loading={loading}
              setExperience={setExperience}
            />
          )}
          {/* Formulario Education */}
          {segment === "education" && <AddFormationView loading={loading} setFormation={setFormation}/>}
        </div>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="¡Cambio realizado con éxito!"
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};
export default ModidyCv;
