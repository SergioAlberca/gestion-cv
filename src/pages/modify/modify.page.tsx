import {
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonIcon,
  IonPage,
  IonModal,
  IonCol,
  IonRow,
} from "@ionic/react";
import { create } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import {
  dataSegmentAddPage,
  typeKeySections,
  typePage,
} from "../../constants/constants";
import {
  getExperience,
  getFormation,
  getSkills,
  updateExperiences,
  updateFormation,
  updateSkills,
} from "../../services/modify.service";
import ModifyModal from "../../modals/modify-modal/modify.modal";
import { useHistory } from "react-router-dom";
import SkeletonList from "../../components/skeletonLoading/skeletonListLoading.component";
import Tabs from "../../components/tabs/tabs.component";

const ModifyPage = () => {
  let history = useHistory();
  const [formation, setFormation] = useState<any>(null);
  const [experience, setExperience] = useState<any>(null);
  const [skill, setSkills] = useState<any>(null);
  const [loadingSkeleton, setLoadingSkeleton] = useState<boolean>(false);
  const [loadingModal, setLoadingModal] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [typeData, setTypeData] = useState<string>("");
  const [dataToUpdate, setDataToUpdate] = useState<any>(null);
  const [index, setIndex] = useState<number>();
  const [segment, setSegment] = useState<any>(typeKeySections.skill);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoadingSkeleton(true);
    Promise.all([getFormation(), getExperience(), getSkills()])
      .then((values) => {
        setFormation(values[0]);
        setExperience(values[1]);
        setSkills(values[2]);
        setLoadingSkeleton(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingSkeleton(false);
      });
  };

  const onShowModal = (value: string, index: number, item: any) => {
    setTypeData(value);
    setIndex(index);
    setDataToUpdate(item);
    setShowModal(true);
  };

  const checkType = () => {
    switch (typeData) {
      case "skills":
        return typeKeySections.skill;
      case "experience":
        return typeKeySections.experience;
      case "education":
        return typeKeySections.education;
      default:
        return typeKeySections.education;
    }
  };

  const checkSetData = (data: any) => {
    switch (typeData) {
      case "skills":
        return setSkill(data);
      case "experience":
        return setExperiences(data);
      case "education":
        return setEducation(data);
      default:
        return null;
    }
  };

  const setSkill = (data: any) => {
    console.log("entro");
    setLoadingModal(true);
    let values: Array<any> = [];
    skill.habilidades.map((item, i) => {
      if (i === index) {
        item = data;
      }
      values.push(item);
    });

    updateSkills(values)
      .then(() => {
        setLoadingModal(false);
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingModal(false);
        setShowModal(false);
      });
  };

  const setEducation = (data: any) => {
    setLoadingModal(true);
    let values: Array<any> = [];
    formation.data.map((item, i) => {
      if (i === index) {
        item = data;
      }
      values.push(item);
    });

    updateFormation(values)
      .then(() => {
        setLoadingModal(false);
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingModal(false);
        setShowModal(false);
      });
  };

  const setExperiences = (data: any) => {
    setLoadingModal(true);
    let values: Array<any> = [];
    experience.data.map((item, i) => {
      if (i === index) {
        item = data;
      }
      values.push(item);
    });

    updateExperiences(values)
      .then(() => {
        setLoadingModal(false);
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingModal(false);
        setShowModal(false);
      });
  };

  return (
    <IonPage>
      <Header
        type={typePage.modify}
        title="Modificar"
        logo={<IonIcon md={create} className="dashboard-item-icon"></IonIcon>}
        pushRoute={() => history.goBack()}
      ></Header>
      {loadingSkeleton && (
        <IonContent>
          <SkeletonList />
        </IonContent>
      )}
      {!loadingSkeleton && (
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
          {segment === typeKeySections.education && formation && (
            <IonRow>
              <IonCol size="12">
                {formation.data.map((item, i) => {
                  return (
                    <IonList key={i}>
                      <IonItem
                        onClick={() => onShowModal(formation.label, i, item)}
                      >
                        <IonLabel>{item.title}</IonLabel>
                        <IonIcon md={create} style={{ padding: 5 }}></IonIcon>
                      </IonItem>
                    </IonList>
                  );
                })}
              </IonCol>
            </IonRow>
          )}
          {segment === typeKeySections.experience && experience && (
            <IonRow>
              <IonCol size="12">
                {experience.data.map((item, i) => {
                  return (
                    <IonList key={i}>
                      <IonItem
                        onClick={() => onShowModal(experience.label, i, item)}
                      >
                        <IonLabel>{item.employment}</IonLabel>
                        <IonIcon md={create} style={{ padding: 5 }}></IonIcon>
                      </IonItem>
                    </IonList>
                  );
                })}
              </IonCol>
            </IonRow>
          )}
          {segment === typeKeySections.skill && skill && (
            <IonRow>
              <IonCol size="12">
                {skill.habilidades.map((item, i) => {
                  return (
                    <IonList key={i}>
                      <IonItem
                        onClick={() => onShowModal(skill.label, i, item)}
                      >
                        <IonLabel>{item.label}</IonLabel>
                        <IonIcon md={create} style={{ padding: 5 }}></IonIcon>
                      </IonItem>
                    </IonList>
                  );
                })}
              </IonCol>
            </IonRow>
          )}
          <IonModal
            isOpen={showModal}
            cssClass="my-custom-class"
            onDidDismiss={getData}
          >
            <ModifyModal
              type={checkType()}
              loading={loadingModal}
              setData={checkSetData}
              closeModal={setShowModal}
              data={dataToUpdate}
            />
          </IonModal>
        </IonContent>
      )}
    </IonPage>
  );
};

export default ModifyPage;
