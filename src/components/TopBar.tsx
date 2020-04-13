import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Platform,
  Image,
} from "react-native";
export const TopBar = () => (
  <>
    <StatusBar
      barStyle="dark-content"
      hidden={false}
      backgroundColor="#42cdef"
      translucent
    />
    <View style={s.headerBar}>
      <Image style={s.logo} source={require("../../assets/icon.png")} />
      <Text style={s.headerText}> Eat Me </Text>
    </View>
  </>
);

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
});
