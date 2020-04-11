import firebase from "firebase";
import "@firebase/firestore";
import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  FlatList,
  View,
  Text,
  Image,
  Platform,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import { config as fbConfig } from "./firebase";

export default function App() {
  const [inputText, setInputText] = useState("new food item");

  // if (!firebase.apps.length) firebase.initializeApp(fbConfig);

  // const kitchenRef = firebase
  //   .firestore()
  //   .collection("kitchens")
  //   .doc("k6WKW8cNRoLSrFSXF5tO");

  // kitchenRef.get().then((a) => console.log(a));

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#42cdef"
        translucent
      />
      <View style={s.headerBar}>
        <Image style={s.logo} source={require("./assets/icon.png")} />
        <Text style={s.headerText}> Eat Me </Text>
      </View>
      <FlatList
        style={s.container}
        data={Array.from({ length: 50 }).map((i) => ({ id: i }))}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={s.listItem}>
              <Text style={{ fontWeight: "bold" }}>{`Item ${item.id} `}</Text>
              <Text>{`Expires in ${Math.floor(Math.random() * 10)} days`}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <View>
        <TextInput
          style={s.inputBox}
          value={inputText}
          onChangeText={setInputText}
        />
      </View>
    </>
  );
}

const s = StyleSheet.create({
  headerBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#42cdef",
    paddingBottom: 10,
    paddingLeft: 30,
    paddingTop: Platform.OS == "web" ? 10 : 40,
  },
  headerText: {
    color: "#424242",
    fontSize: 40,
    fontWeight: "bold",
  },
  container: {
    padding: 30,
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
  },
  listItem: {
    margin: 10,
    height: 30,
    backgroundColor: "#eaeaea",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
    borderColor: "#424242",
    borderWidth: 1,
  },
  inputBox: {
    backgroundColor: "#42cdef",
    padding: 20,
  },
});
