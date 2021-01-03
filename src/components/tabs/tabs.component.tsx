import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";
import React from "react";

interface tabsProps {
  data: Array<any>;
  segment: string;
  setSegment: any;
  color: string;
}

const Tabs = (props: tabsProps) => {
  return (
    <IonSegment
      color={props.color}
      value={props.segment}
      onIonChange={(e) => props.setSegment(e.detail.value)}
    >
      {props.data.map((item: any) => {
        return (
          <IonSegmentButton value={item.key} key={item.key}>
            <IonLabel>{item.title}</IonLabel>
          </IonSegmentButton>
        );
      })}
    </IonSegment>
  );
};

export default Tabs;
