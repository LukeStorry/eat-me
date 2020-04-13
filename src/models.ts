import firebase from "firebase";

export type Kitchen = {
  name: string;
  foods: Food[];
};
export type Food = {
  id: string;
  name: string;
  expiry: Timestamp;
};

export const Timestamp = firebase.firestore.Timestamp;
export type Timestamp = firebase.firestore.Timestamp;