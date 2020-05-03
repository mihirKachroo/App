import React from "react";
import { Text, View, FlatList } from "react-native";
import { Button, List } from "react-native-paper";
import HeaderBar from "../components/HeaderBar";
import { Checkbox } from "react-native-paper";

const goals = [
  {
    id: 1,
    name: "AAAAAAA",
    description: "aaaaaa",
    completed: true,
  },
  {
    id: 2,
    name: "AAAAAAA",
    description: "aaaaaa",
    completed: true,
  },
  {
    id: 3,
    name: "AAAAAAA",
    description: "aaaaaa",
    completed: false,
  },
  {
    id: 4,
    name: "AAAAAAA",
    description: "aaaaaa",
    completed: true,
  },
  {
    id: 5,
    name: "AAAAAAA",
    description: "aaaaaa",
    completed: false,
  },
  {
    id: 6,
    name: "AAAAAAA",
    description: "aaaaaa",
    completed: true,
  },
  {
    id: 7,
    name: "AAAAAAA",
    description: "aaaaaa",
    completed: false,
  },
  {
    id: 8,
    name: "AAAAAAA",
    description: "aaaaaa",
    completed: false,
  },
  {
    id: 9,
    name: "AAAAAAA",
    description: "aaaaaa",
    completed: false,
  },
];

export default function FinancialGoals() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar pageName={"Financial Goals"} />
      <FlatList
        data={goals}
        renderItem={({ item }) => {
          return (
            <List.Item
              title={item.name}
              description={item.description}
              right={() => <Checkbox status={item.completed ? "checked" : "unchecked"} />}
            />
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
      <View style={{ justifyContent: "flex-end", margin: 20 }}>
        <Button
          icon={"playlist-plus"}
          onPress={() => {}}
          mode="contained"
          style={{ height: 50, justifyContent: "center" }}
        >
          Add Goal
        </Button>
      </View>
    </View>
  );
}
