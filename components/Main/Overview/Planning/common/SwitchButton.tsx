import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ISwitchButtonProps {
  selectedTab: number;
  setSelectedTab: (_selectedTab: number) => void;
}
export default function SwitchButton({
  selectedTab,
  setSelectedTab,
}: ISwitchButtonProps) {
  return (
    <View style={styles.switchButtonContainer}>
      <TouchableOpacity
        style={[
          styles.switchButton,
          selectedTab === 0 && styles.selectedSwitchButton,
        ]}
        onPress={() => {
          setSelectedTab(0);
        }}
      >
        <Text
          style={[
            styles.switchButtonText,
            selectedTab === 0 && styles.selectedSwitchButtonText,
          ]}
        >
          Goals
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.switchButton,
          selectedTab === 1 && styles.selectedSwitchButton,
        ]}
        onPress={() => {
          setSelectedTab(1);
        }}
      >
        <Text
          style={[
            styles.switchButtonText,
            selectedTab === 1 && styles.selectedSwitchButtonText,
          ]}
        >
          Estate
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  selectedSwitchButton: {
    backgroundColor: "#1890FF",
  },
  selectedSwitchButtonText: {
    color: "#fff",
  },
  switchButton: {
    alignItems: "center",
    borderRadius: 8,
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },
  switchButtonContainer: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    height: 45,
    padding: 4,
  },
  switchButtonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
