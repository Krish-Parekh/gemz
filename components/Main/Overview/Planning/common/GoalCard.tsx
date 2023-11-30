import React from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import {
  Badge,
  BadgeText,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
} from "@gluestack-ui/themed";

import { type IGoalCard } from "../Planning";

import { Edit, Trash } from "lucide-react-native";

interface IGoalCardProps {
  data: IGoalCard;
}

export default function GoalCard({ data }: IGoalCardProps) {
  const { name, assetClassPreference, investmentHorizon, returnExpectations } =
    data;
  return (
    <VStack style={styles.goalCard}>
      <HStack style={styles.headerContainer}>
        <Text style={styles.headerText}>{name}</Text>
        <HStack style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon as={Edit} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Delete Goal",
                "Are you sure you want to delete this goal?",
              );
            }}
          >
            <Icon as={Trash} />
          </TouchableOpacity>
        </HStack>
      </HStack>
      <Divider my="$0.5" />
      <VStack space="sm" style={styles.assetClassContainer}>
        <Text style={styles.label}>Asset Class</Text>
        <HStack space="md">
          {assetClassPreference.map((assetClass) => {
            return (
              <Badge key={assetClass}>
                <BadgeText style={styles.value}>{assetClass}</BadgeText>
              </Badge>
            );
          })}
        </HStack>
      </VStack>
      <Divider my="$0.5" />
      <VStack style={styles.container}>
        <Text style={styles.label}>Investment Horizon</Text>
        <Text style={styles.value}>{investmentHorizon}</Text>
      </VStack>
      <Divider my="$0.5" />
      <VStack style={styles.container}>
        <Text style={styles.label}>Return Expectations</Text>
        <Text style={styles.value}>{returnExpectations}</Text>
      </VStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  assetClassContainer: {
    padding: 12,
  },
  container: {
    padding: 12,
  },
  goalCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
    marginHorizontal: 4,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerContainer: {
    justifyContent: "space-between",
    padding: 12,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  value: {
    fontSize: 12,
  },
});
