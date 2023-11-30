import React from "react";
import { StyleSheet } from "react-native";
import { HStack, Switch, Text, VStack } from "@gluestack-ui/themed";
export default function Settings() {
  return (
    <VStack style={styles.container}>
      <HStack justifyContent="space-between" alignItems="center">
        <Text style={styles.settingText}>Allow Notifications</Text>
        <Switch />
      </HStack>
      <HStack justifyContent="space-between" alignItems="center">
        <Text style={styles.settingText}>Transaction Alerts</Text>
        <Switch />
      </HStack>
      <HStack justifyContent="space-between" alignItems="center">
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch />
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 16,
  },
  settingText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
