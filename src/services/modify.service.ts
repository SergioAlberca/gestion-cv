import firebase from "firebase";
import { firestore } from "../config/firebase.config";
import { experience } from "../interfaces/experience.interface";
import { formation } from "../interfaces/formation.skill";
import { skill } from "../interfaces/skills.interface";

export function setSkills(skill: skill): Promise<any> {
  return new Promise((resolve, reject) => {
    firestore
      .collection("data")
      .doc("skills")
      .update({
        habilidades: firebase.firestore.FieldValue.arrayUnion({
          label: skill.name,
          percentage: skill.percentage,
          category: skill.category,
        }),
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}
export function setExperiences(experience: experience): Promise<any> {
  return new Promise((resolve, reject) => {
    firestore
      .collection("data")
      .doc("experience")
      .update({
        data: firebase.firestore.FieldValue.arrayUnion({
          city: experience.city,
          company: experience.company,
          descriptionEmployment: experience.descriptionEmployment,
          employment: experience.employment,
          since: experience.since,
          until: experience.until,
        }),
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

export function setFormations(formation: formation): Promise<any> {
  return new Promise((resolve, reject) => {
    firestore
      .collection("data")
      .doc("education")
      .update({
        data: firebase.firestore.FieldValue.arrayUnion({
          category: formation.category,
          institute: formation.institute,
          title: formation.title,
          since: formation.since,
          until: formation.until,
        }),
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}