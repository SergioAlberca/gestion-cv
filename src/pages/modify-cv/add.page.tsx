import {
  IonCol,
  IonContent,
  IonIcon,
  IonPage,
  IonRow,
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
} from "../../services/add.service";
/* Views */
import AddExperienceView from "../../views/add-experience/add-experience.view";
import AddFormationView from "../../views/add-formation/add-formartion.view";
import AddSkillsView from "../../views/add-skills/add-skills.view";
/* Css */
import "./add.page.scss";
/* Components */
import Header from "../../components/header/header.component";
import Tabs from "../../components/tabs/tabs.component";
import { dataSegmentAddPage, typeKeySections, typePage } from "../../constants/constants";

const AddPage: React.FC = () => {

  const [segment, setSegment] = useState<any>(typeKeySections.skill);
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
      <Header
        type={typePage.add}
        title="Añadir Elementos"
        logo={<IonIcon md={create} className="dashboard-item-icon"></IonIcon>}
      ></Header>
      <IonContent>
        <IonRow>
          <IonCol size="12">
            <Tabs
              data={dataSegmentAddPage}
              segment={segment}
              setSegment={setSegment}
              color="tertiary"
            ></Tabs>
          </IonCol>
        </IonRow>
        <div className="container-forms">
          {/* Formulario Habilidades */}
          {segment === typeKeySections.skill && (
            <AddSkillsView loading={loading} setSkill={setSkill} />
          )}
          {/* Formulario Experiencia */}
          {segment === typeKeySections.experience && (
            <AddExperienceView
              loading={loading}
              setExperience={setExperience}
            />
          )}
          {/* Formulario Education */}
          {segment === typeKeySections.education && (
            <AddFormationView loading={loading} setFormation={setFormation} />
          )}
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
export default AddPage;