import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { daysAgo } from "../db-utils";
import { Food, Kitchen } from "../models";

type FoodListProps = {
  kitchen: Kitchen;
};

export const FoodList = ({ kitchen }: FoodListProps) => (
  <FlatList
    // ListHeaderComponent={<Text style={s.title}>{kitchen.name}</Text>}
    style={s.list}
    numColumns={
      Dimensions.get("window").width < 800
        ? 1
        : Dimensions.get("window").width < 1100
        ? 2
        : 3
    }
    data={kitchen.foods}
    renderItem={({ item }: { item: Food }) => (
      <TouchableOpacity style={s.listItem}>
        <View style={s.rowContainer}>
          <Text style={s.foodName}>{item.name}</Text>
          <Text>{daysAgo(item.expiry)} days</Text>
        </View>
      </TouchableOpacity>
    )}
  />
);

const s = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  list: {
    height: 0,
    marginHorizontal: "auto",
    paddingHorizontal: 30,
  },
  listItem: {
    flex: 1,
    padding: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    backgroundColor: "#eaeaea",
    borderRadius: 5,
    borderColor: "#424242",
    borderWidth: 1,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  foodName: {
    minWidth: 80,
    fontWeight: "bold",
    paddingRight: 2,
  },
});
