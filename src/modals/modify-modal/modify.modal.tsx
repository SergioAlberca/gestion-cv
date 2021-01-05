import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import React from "react";
import { typeKeySections } from "../../constants/constants";
import AddExperienceView from "../../views/add-experience/add-experience.view";
import AddFormationView from "../../views/add-formation/add-formartion.view";
import AddSkillsView from "../../views/add-skills/add-skills.view";

interface modifyModalProps {
  type: string;
  loading: boolean;
  setData: any;
  closeModal: any;
  data: any;
}

const ModifyModal = (props: modifyModalProps) => {
  return (
    <IonPage>
      <IonLoading isOpen={props.loading} message={"Actualizando..."} />
      <IonHeader>
        <IonToolbar mode="md" color="warning">
          <IonTitle style={{ color: "white" }}>Modificar</IonTitle>
          <IonIcon
            slot="start"
            md={arrowBack}
            style={{ padding: 10, fontSize: 25, color: "white" }}
            onClick={() => props.closeModal(false)}
          ></IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {props.type === typeKeySections.skill && (
          <AddSkillsView
            loading={props.loading}
            setSkill={props.setData}
            from="modify"
            data={props.data}
          />
        )}
        {props.type === typeKeySections.education && (
          <AddFormationView
            loading={props.loading}
            setFormation={props.setData}
            from="modify"
            data={props.data}
          />
        )}
        {props.type === typeKeySections.experience && (
          <AddExperienceView
            loading={props.loading}
            setExperience={props.setData}
            from="modify"
            data={props.data}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default ModifyModal;
