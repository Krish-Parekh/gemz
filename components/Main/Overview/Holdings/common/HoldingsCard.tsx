import React from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { Divider, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";

import { type IHoldingsCard } from "../Holdings";

import { Edit, Trash } from "lucide-react-native";

interface IHoldingsProps {
  data: IHoldingsCard;
}

export default function HoldingsCard({ data }: IHoldingsProps) {
  const { name, account_number, account_type, relationship_number, currency } =
    data;
  return (
    <VStack style={styles.card}>
      <HStack style={styles.headerContainer}>
        <Text style={styles.headerText}>{name}</Text>
        <HStack style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon as={Edit} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Delete Estate",
                "Are you sure you want to delete this estate?",
              );
            }}
          >
            <Icon as={Trash} />
          </TouchableOpacity>
        </HStack>
      </HStack>
      <Divider my="$0.5" />
      <VStack style={styles.itemContainer} space="md">
        <HStack>
          <VStack style={styles.item}>
            <Text style={styles.label}>Account Number</Text>
            <Text style={styles.value}>{account_number}</Text>
          </VStack>
          <VStack style={styles.item}>
            <Text style={styles.label}>Account Type</Text>
            <Text style={styles.value}>{account_type}</Text>
          </VStack>
        </HStack>
        <HStack>
          <VStack style={styles.item}>
            <Text style={styles.label}>Relationship Number</Text>
            <Text style={styles.value}>{relationship_number}</Text>
          </VStack>
          <VStack style={styles.item}>
            <Text style={styles.label}>Currency</Text>
            <Text style={styles.value}>{currency}</Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  card: {
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
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
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
  item: {
    flex: 1,
  },
  itemContainer: {
    padding: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  value: {
    fontSize: 12,
  },
});
