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
  Dimensions,
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
        style={s.list}
        numColumns={Dimensions.get("window").width > 800 ? 2 : 1}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 121, 12, 13, 54, 60].map((i) => ({
          key: i,
          name: i,
        }))}
        renderItem={({ item }) => (
          <TouchableOpacity style={s.listItem}>
            <View style={s.rowContainer}>
              <Text style={{ fontWeight: "bold" }}>Item {item.name} </Text>
              <Text>{`Expires in ${Math.floor(Math.random() * 10)} days`}</Text>
            </View>
          </TouchableOpacity>
        )}
        onRefresh={() => console.log("refreshing")}
        refreshing={false}
      />

      <View style={s.inputBox}>
        <TextInput value={inputText} onChangeText={setInputText} />
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
    paddingTop: Platform.OS === "web" ? 10 : 40,
  },
  headerText: {
    color: "#424242",
    fontSize: 40,
    fontWeight: "bold",
  },
  logo: {
    width: 50,
    height: 50,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  list: {
    height: 0,
    marginHorizontal: "auto",
    paddingHorizontal: 30,
  },
  listItem: {
    padding: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    backgroundColor: "#eaeaea",
    borderRadius: 5,
    borderColor: "#424242",
    borderWidth: 1,
  },
  inputBox: {
    alignItems: "center",
    backgroundColor: "#42cdef",
    padding: 20,
  },
});
