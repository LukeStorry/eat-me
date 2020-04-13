import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

import { Food, Timestamp } from "../models";

type InputFormProps = { addItem: (food: Food) => void };

export const InputForm = ({ addItem }: InputFormProps) => {
  const [inputText, setInputText] = useState("");
  return (
    <View style={[s.inputBox]}>
      <TextInput
        style={{ padding: 10 }}
        value={inputText}
        onChangeText={setInputText}
        placeholder="____________"
      />
      <Button
        title="Add"
        onPress={() => {
          addItem({
            id: Math.random().toString(16).slice(-4),
            name: inputText,
            expiry: Timestamp.fromDate(new Date() as Date),
          });
          setInputText("");
        }}
        color="black"
      />
    </View>
  );
};

const s = StyleSheet.create({
  inputBox: {
    backgroundColor: "#42cdef",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    minWidth: 20,
  },
});
