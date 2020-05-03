import React, { useState } from "react";
import { Text, View, StatusBar, StyleSheet, ScrollView } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DrawerContent({ navigation }) {
  const [selected, setSelected] = useState("Home");
  function selectItem(item) {
    setSelected(item);
    navigation.navigate(item);
  }
  return (
    <ScrollView style={{ marginTop: StatusBar.currentHeight }}>
      <Drawer.Section title={"You"} style={styles.section}>
        <DrawerItem
          icon={({ focused, color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={focused ? "view-dashboard" : "view-dashboard-outline"}
            />
          )}
          label={"Overview"}
          onPress={() => selectItem("Home")}
          focused={selected === "Home"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons color={color} size={size} name={"target"} />
          )}
          label={"Financial Goals"}
          onPress={() => selectItem("Goals")}
          focused={selected === "Goals"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"format-list-bulleted"}
            />
          )}
          label={"My transactions"}
          onPress={() => selectItem("Transaction")}
          focused={selected === "Transaction"}
        />
      </Drawer.Section>
      <Drawer.Section title={"Tools"} style={styles.section}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"calculator"}
            />
          )}
          label={"Compound Interest Calc"}
          onPress={() => selectItem("CompoundInterest")}
          focused={selected === "CompoundInterest"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"book-open"}
            />
          )}
          label={"Budgeting"}
          onPress={() => selectItem("Budgeting")}
          focused={selected === "Budgeting"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"calculator"}
            />
          )}
          label={"Merge Budgets"}
          onPress={() => selectItem("MergeBudgets")}
          focused={selected === "MergeBudgets"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons color={color} size={size} name={"bank"} />
          )}
          label={"Bank Reconciliations"}
          onPress={() => selectItem("BankReconciliations")}
          focused={selected === "BankReconciliations"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"google-analytics"}
            />
          )}
          label={"Analytics"}
          onPress={() => selectItem("Analytics")}
          focused={selected === "Analytics"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"library-books"}
            />
          )}
          label={"Did you Know"}
          onPress={() => selectItem("DidYouKnow")}
          focused={selected === "DidYouKnow"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"help-box"}
            />
          )}
          label={"Help & Feedback"}
          onPress={() => selectItem("Help")}
          focused={selected === "Help"}
        />
      </Drawer.Section>
      <Drawer.Section title={"Recommendations"}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"credit-card"}
            />
          )}
          label={"Credit Cards"}
          onPress={() => selectItem("CreditCardRecommendations")}
          focused={selected === "CreditCardRecommendations"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"chart-areaspline"}
            />
          )}
          label={"Stocks"}
          onPress={() => selectItem("StockRecommendations")}
          focused={selected === "StockRecommendations"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"office-building"}
            />
          )}
          label={"Real Estate"}
          onPress={() => selectItem("RealEstateRecommendations")}
          focused={selected === "RealEstateRecommendations"}
        />
      </Drawer.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingBottom: 20,
  },
});
