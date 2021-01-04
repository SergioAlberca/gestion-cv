import { IonItem, IonList, IonSkeletonText } from "@ionic/react";
import React from "react";

const SkeletonList = () => {
  return (
    <div className="ion-padding custom-skeleton">
      <IonList>
        <IonItem>
          <IonSkeletonText animated style={{ width: "60%" }} />
        </IonItem>
        <IonItem>
          <IonSkeletonText animated style={{ width: "60%" }} />
        </IonItem>
        <IonItem>
          <IonSkeletonText animated style={{ width: "60%" }} />
        </IonItem>
        <IonItem>
          <IonSkeletonText animated style={{ width: "60%" }} />
        </IonItem>
        <IonItem>
          <IonSkeletonText animated style={{ width: "60%" }} />
        </IonItem>
        <IonItem>
          <IonSkeletonText animated style={{ width: "60%" }} />
        </IonItem>
        <IonItem>
          <IonSkeletonText animated style={{ width: "60%" }} />
        </IonItem>
        <IonItem>
          <IonSkeletonText animated style={{ width: "60%" }} />
        </IonItem>
        <IonItem>
          <IonSkeletonText animated style={{ width: "60%" }} />
        </IonItem>
      </IonList>
    </div>
  );
};

export default SkeletonList;
