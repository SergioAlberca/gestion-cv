import {
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonSpinner,
} from "@ionic/react";
import { sunny } from "ionicons/icons";
import React, { useState } from "react";
/* Interfaces */
import { skill } from "../../interfaces/skills.interface";

function AddSkillsView(props: any) {
  const [skillName, setSkillName] = useState<string>("");
  const [skillPercentage, setSkillPercentage] = useState<any>(0);
  const [category, setCategory] = useState<string>("frameworks");

  const buildData = (): skill => {
    let data = {
      name: skillName,
      percentage: skillPercentage,
      category: category,
    };
    return data;
  };

  return (
    <IonRow className="form-container">
      <IonCol size="12" className="form-item">
        <IonItem>
          <IonLabel position="floating">Nombre de habilidad</IonLabel>
          <IonInput
            value={skillName}
            onIonChange={(e) => setSkillName(e.detail.value!)}
            disabled={props.loading}
          ></IonInput>
        </IonItem>
      </IonCol>
      <IonCol size="12">
        <IonLabel>Porcentaje</IonLabel>
        <IonItem>
          <IonRange
            value={skillPercentage}
            min={0}
            max={100}
            pin
            color="tertiary"
            onIonChange={(e) => setSkillPercentage(e.detail.value!)}
            disabled={props.loading}
          >
            <IonIcon size="small" slot="start" icon={sunny} />
            <IonIcon size="small" slot="end" icon={sunny} />
          </IonRange>
        </IonItem>
      </IonCol>
      <IonCol size="12">
        <IonItem>
          <IonLabel>Categoría</IonLabel>
          <IonSelect
            value={category}
            placeholder="Seleccione una categoría"
            okText="Ok"
            cancelText="Cancelar"
            onIonChange={(e) => setCategory(e.detail.value)}
          >
            <IonSelectOption value="frameworks">Framework</IonSelectOption>
            <IonSelectOption value="languajes">Lenguaje</IonSelectOption>
            <IonSelectOption value="tools">
              Conocimiento técnico
            </IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonCol>
      <IonCol className="save-button-container">
        <IonButton
          color="tertiary"
          disabled={props.loading}
          onClick={() => props.setSkill(buildData())}
        >
          <span>Guardar</span>
          {props.loading && (
            <IonSpinner name="crescent" style={{ marginLeft: 10 }} />
          )}
        </IonButton>
      </IonCol>
    </IonRow>
  );
}

export default AddSkillsView;
