import React from "react";
import { StyleSheet } from "react-native";
import { Divider, HStack, Text, VStack } from "@gluestack-ui/themed";

import { type IPerformerCard } from "../Performers";

interface IPerformerCardProps {
  data: IPerformerCard;
}

export default function PerformerCard({ data }: IPerformerCardProps) {
  const { name, percentage, total_pl } = data;

  return (
    <VStack style={styles.card}>
      <HStack style={styles.headerContainer}>
        <Text style={styles.headerText}>{name}</Text>
      </HStack>
      <Divider my="$0.5" />
      <VStack style={styles.itemContainer} space="md">
        <HStack>
          <VStack style={styles.item}>
            <Text style={styles.label}>Percentage changed</Text>
            <Text style={styles.value}>{percentage}</Text>
          </VStack>
          <VStack style={styles.item}>
            <Text style={styles.label}>Total PL</Text>
            <Text style={styles.value}>{total_pl}</Text>
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
    flex: 1,
    padding: 12,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
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
