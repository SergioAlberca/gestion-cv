import { firestore } from "../config/firebase.config";

export function getPersonalData(): Promise<any> {
    return new Promise((resolve, reject) => {
      firestore
        .collection("data")
        .doc("personal-data")
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