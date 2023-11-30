import React from "react"
import Colors from "../../../../../constants/Colors";
import { IPositionsCard } from "../Positions";
import { HStack, Text, VStack } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

interface IPositionCardProps {
  data: IPositionsCard;
}

export default function PositionCard({ data }: IPositionCardProps) {
  const { security_name, ticker, percentage, market_value } = data;
  return (
    <VStack style={styles.card}>
      <HStack>
        <VStack style={styles.item} justifyConent="space-between">
          <Text size="xs" color={Colors.dark}>
            {security_name}
          </Text>
          <Text size="lg" color={Colors.dark}>
            {ticker}
          </Text>
        </VStack>
        <VStack style={styles.item}>
          <Text size="xs" textAlign="right" color={Colors.green}>
            {percentage}
          </Text>
          <Text size="lg" textAlign="right" color={Colors.primary}>
            {market_value}
          </Text>
        </VStack>
      </HStack>
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
    padding: 12,
  },
  item: {
    flex: 1,
  },
});
