import React from "react";
import { Alert, StyleSheet } from "react-native";
import { Divider, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";

import { type IEstateCard } from "../Planning";

import { Edit, Trash } from "lucide-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IEstateCardProps {
  data: IEstateCard;
}

export default function EstateCard({ data }: IEstateCardProps) {
  const { name, relationship, email, dob, phoneNumber, sharePercentage } = data;

  return (
    <VStack style={styles.card}>
      <HStack style={styles.headerContainer}>
        <Text style={styles.headerText}>Beneficiary Person - Villa</Text>
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
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{name}</Text>
          </VStack>
          <VStack style={styles.item}>
            <Text style={styles.label}>Relationship</Text>
            <Text style={styles.value}>{relationship}</Text>
          </VStack>
        </HStack>
        <HStack>
          <VStack style={styles.item}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{email}</Text>
          </VStack>
          <VStack style={styles.item}>
            <Text style={styles.label}>DOB</Text>
            <Text style={styles.value}>{dob}</Text>
          </VStack>
        </HStack>
        <HStack>
          <VStack style={styles.item}>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.value}>{phoneNumber}</Text>
          </VStack>
          <VStack style={styles.item}>
            <Text style={styles.label}>Share Percentage</Text>
            <Text style={styles.value}>{sharePercentage}%</Text>
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
