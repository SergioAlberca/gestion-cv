import {
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonDatetime,
  IonTextarea,
  IonSpinner,
} from "@ionic/react";
import React, { useState } from "react";
/* Inrerfaces */
import { formation } from "../../interfaces/formation.skill";
/* Utils */
import { formatDate } from "../../utils/date-utils";

function AddFormationView(props: any) {
  const [category, setCategory] = useState<string>("");
  const [institute, setInstitute] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [since, setSince] = useState<string>("");
  const [until, setUntil] = useState<string>("");

  const buildData = (): formation => {
    let data = {
      category: category,
      institute: institute,
      title: title,
      since: formatDate(since, "dd/MM/yyyy"),
      until: formatDate(until, "dd/MM/yyyy"),
    };

    return data;
  };

  return (
    <IonRow className="form-container">
      <IonCol size="12" className="form-item">
        <IonItem>
          <IonLabel position="floating">Título</IonLabel>
          <IonInput
            value={title}
            onIonChange={(e) => setTitle(e.detail.value!)}
          ></IonInput>
        </IonItem>
      </IonCol>
      <IonCol size="12" className="form-item">
        <IonItem>
          <IonLabel position="floating">Centro</IonLabel>
          <IonInput
            value={institute}
            onIonChange={(e) => setInstitute(e.detail.value!)}
          ></IonInput>
        </IonItem>
      </IonCol>
      <IonCol size="12" className="form-item">
        <IonItem>
          <IonLabel position="floating">Categoría</IonLabel>
          <IonTextarea
            value={category}
            onIonChange={(e) => setCategory(e.detail.value!)}
          ></IonTextarea>
        </IonItem>
      </IonCol>
      <IonCol size="12" className="form-item">
        <IonItem>
          <IonLabel position="floating">Comienzo</IonLabel>
          <IonDatetime
            onIonChange={(e) => setSince(e.detail.value!)}
          ></IonDatetime>
        </IonItem>
      </IonCol>
      <IonCol size="12" className="form-item">
        <IonItem>
          <IonLabel position="floating">Fin</IonLabel>
          <IonDatetime
            onIonChange={(e) => setUntil(e.detail.value!)}
          ></IonDatetime>
        </IonItem>
      </IonCol>
      <IonCol className="save-button-container form-item">
        <IonButton
          color="tertiary"
          disabled={props.loading}
          onClick={() => props.setFormation(buildData())}
        >
          {" "}
          <span>Guardar</span>
          {props.loading && (
            <IonSpinner name="crescent" style={{ marginLeft: 10 }} />
          )}
        </IonButton>
      </IonCol>
    </IonRow>
  );
}

export default AddFormationView;
