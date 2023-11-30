import React from "react";
import { StyleSheet } from "react-native";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  Badge,
  BadgeText,
  Button,
  ButtonText,
  HStack,
  Text,
  VStack,
} from "@gluestack-ui/themed";

const Goals = ["Emergency Fund", "Car", "Vacation", "Home Purchase", "Other"];

interface IGoalBottomSheetProps {
  isOpen: boolean;
  handleModalClose: () => void;
  handleGoalButtonPress: () => void;
}

export default function GoalBottomSheet({
  isOpen,
  handleModalClose,
  handleGoalButtonPress,
}: IGoalBottomSheetProps) {
  return (
    <Actionsheet isOpen={isOpen} onClose={handleModalClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <VStack space="xl" style={styles.container}>
          <VStack space="md">
            <Text style={styles.title}>Choose your goal</Text>
            <Text style={styles.subtitle}>
              Select from pre-defined goals or create your own
            </Text>
          </VStack>
          <HStack space="md" style={styles.badgeContainer}>
            {Goals.map((goal) => {
              return (
                <Badge style={styles.goalBadge} key={goal}>
                  <BadgeText>{goal}</BadgeText>
                </Badge>
              );
            })}
          </HStack>
          <Text style={styles.title}>OR</Text>
          <Button onPress={handleGoalButtonPress}>
            <ButtonText>Add a new goal</ButtonText>
          </Button>
        </VStack>
      </ActionsheetContent>
    </Actionsheet>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container: {
    margin: 16,
  },
  goalBadge: {
    padding: 8,
  },
  subtitle: {
    color: "gray",
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
