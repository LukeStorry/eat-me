import firebase from "firebase";
import "@firebase/firestore";
import React, { useState, useEffect } from "react";

import { config as fbConfig } from "./firebase";
import { FoodList } from "./src/components/FoodList";
import { InputForm } from "./src/components/InputForm";
import { TopBar } from "./src/components/TopBar";
import { addItem } from "./src/db-utils";
import { Kitchen } from "./src/models";

export default function App() {
  const [kitchen, setKitchen] = useState<Kitchen>({ name: "", foods: [] });

  if (!firebase.apps.length) firebase.initializeApp(fbConfig);

  const kitchenDocRef = firebase
    .firestore()
    .collection("kitchens")
    .doc("k6WKW8cNRoLSrFSXF5tO");

  useEffect(
    () =>
      kitchenDocRef.onSnapshot((snapshot) =>
        setKitchen(snapshot.data() as Kitchen)
      ),
    []
  );

  return (
    <>
      <TopBar />

      <FoodList kitchen={kitchen} />

      <InputForm addItem={addItem(kitchenDocRef)} />
    </>
  );
}
