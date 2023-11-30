import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { router } from "expo-router";
import { Button, HStack, Text } from "@gluestack-ui/themed";

import GoalBottomSheet from "./GoalBottomSheet";

interface IPlanningHeader {
  selectedTab: number;
}

const headerMapping: Record<number, Record<string, string>> = {
  0: {
    title: "Goals",
    buttonText: "Add Goal",
  },
  1: {
    title: "Estate",
    buttonText: "Add Estate",
  },
};

export default function PlanningHeader({ selectedTab }: IPlanningHeader) {
  const data = headerMapping[selectedTab];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleGoalButtonPress = () => {
    setIsModalOpen(false);
    router.push("/(modals)/AddGoalModal");
  };

  const handleButtonPress = () => {
    switch (selectedTab) {
      case 0:
        setIsModalOpen(true);
        break;
      case 1:
        router.push("/(modals)/AddEstateModal");
        break;
    }
  };
  return (
    <HStack style={styles.headerContainer}>
      <Text style={styles.title}>{data.title}</Text>
      <Button size="xs" onPress={handleButtonPress} style={styles.headerButton}>
        <Text style={styles.headerButtonText}>{data.buttonText}</Text>
        <GoalBottomSheet
          isOpen={isModalOpen}
          handleModalClose={handleModalClose}
          handleGoalButtonPress={handleGoalButtonPress}
        />
      </Button>
    </HStack>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    backgroundColor: "#1890FF",
  },
  headerButtonText: {
    color: "white",
    fontSize: 14,
  },
  headerContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
