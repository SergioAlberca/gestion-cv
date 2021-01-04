import { firestore } from "../config/firebase.config";

export function getFormation(): Promise<any> {
  return new Promise((resolve, reject) => {
    firestore
      .collection("data")
      .doc("education")
      .get()
      .then((doc) => {
        if (doc.exists) {
          resolve(doc.data());
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getExperience(): Promise<any> {
  return new Promise((resolve, reject) => {
    firestore
      .collection("data")
      .doc("experience")
      .get()
      .then((doc) => {
        if (doc.exists) {
          resolve(doc.data());
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getSkills(): Promise<any> {
  return new Promise((resolve, reject) => {
    firestore
      .collection("data")
      .doc("skills")
      .get()
      .then((doc) => {
        if (doc.exists) {
          resolve(doc.data());
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function updateFormation(data: Array<any>): Promise<any> {
  return new Promise((resolve, reject) => {
    firestore
      .collection("data")
      .doc("education")
      .update({
        data: data,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

export function updateExperiences(data: Array<any>): Promise<any> {
  return new Promise((resolve, reject) => {
    firestore
      .collection("data")
      .doc("experience")
      .update({
        data: data,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

export function updateSkills(data: Array<any>): Promise<any> {
  return new Promise((resolve, reject) => {
    firestore
      .collection("data")
      .doc("skills")
      .update({
        habilidades: data,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}
