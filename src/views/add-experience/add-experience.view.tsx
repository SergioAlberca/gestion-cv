import {
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonDatetime,
  IonButton,
  IonSpinner,
} from "@ionic/react";

import React, { useEffect, useState } from "react";
/* Interfaces */
import { AddExperienceViewProps, experience } from "../../interfaces/experience.interface";
/* Utils */
import { formatDate } from "../../utils/date-utils";

function AddExperienceView(props: AddExperienceViewProps) {
  const [city, setCity] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [descriptionEmployment, setDescriptionEmployment] = useState<string>(
    ""
  );
  const [employment, setEmployment] = useState<string>("");
  const [since, setSince] = useState<string>("");
  const [until, setUntil] = useState<string>("");

  useEffect(() => {
    if (props.data && props.from && props.from === "modify") {
      setCity(props.data.city);
      setCompany(props.data.company);
      setDescriptionEmployment(props.data.descriptionEmployment);
      setEmployment(props.data.employment);
      setSince(props.data.since);
      setUntil(props.data.until);
    }
  }, []);

  const buildData = (): experience => {
    let data = {
      city: city,
      company: company,
      descriptionEmployment: descriptionEmployment,
      employment: employment,
      since: formatDate(new Date(since), "dd/MM/yyyy"),
      until: formatDate(new Date(until), "dd/MM/yyyy"),
    };
    return data;
  };

  return (
    <IonRow className="form-container">
      <IonCol size="12" className="form-item">
        <IonItem>
          <IonLabel position="floating">Puesto</IonLabel>
          <IonInput
            value={employment}
            onIonChange={(e) => setEmployment(e.detail.value!)}
          ></IonInput>
        </IonItem>
      </IonCol>
      <IonCol size="12" className="form-item">
        <IonItem>
          <IonLabel position="floating">Empresa</IonLabel>
          <IonInput
            value={company}
            onIonChange={(e) => setCompany(e.detail.value!)}
          ></IonInput>
        </IonItem>
      </IonCol>
      <IonCol size="12" className="form-item">
        <IonItem>
          <IonLabel position="floating">Ciudad</IonLabel>
          <IonInput
            value={city}
            onIonChange={(e) => setCity(e.detail.value!)}
          ></IonInput>
        </IonItem>
      </IonCol>
      <IonCol size="12" className="form-item">
        <IonItem>
          <IonLabel position="floating">Descripcion</IonLabel>
          <IonTextarea
            value={descriptionEmployment}
            onIonChange={(e) => setDescriptionEmployment(e.detail.value!)}
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
      <IonCol size="12" className="save-button-container">
        <IonButton
          color="tertiary"
          disabled={props.loading}
          onClick={() => props.setExperience(buildData())}
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

export default AddExperienceView;
