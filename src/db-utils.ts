import firebase from "firebase";

import "@firebase/firestore";
import { Food, Timestamp } from "./models";

type ref = firebase.firestore.DocumentReference<any>;
export const addItem = (kitchenDocRef: ref) => async (food: Food) =>
  firebase
    .firestore()
    .runTransaction(function (transaction) {
      return transaction.get(kitchenDocRef).then((kitchenDoc) => {
        const foods: any[] = kitchenDoc.data().foods || [];
        transaction.update(kitchenDocRef, { foods: [...foods, food] });
      });
    })
    .then(() => console.log("Transaction successfully committed!"))
    .catch((error) => console.log("Transaction failed: ", error));

export const daysAgo = (tsp: Timestamp) =>
  Math.floor((Date.now() - tsp.toMillis()) / (1000 * 60 * 60 * 24));
