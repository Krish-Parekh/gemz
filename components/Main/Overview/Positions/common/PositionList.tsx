import React from "react"
import { IPositionsCard } from "../Positions";
import { FlatList } from "@gluestack-ui/themed";
import PositionCard from "./PositionCard";

const positionsData: IPositionsCard[] = [
  {
    id: 1,
    security_name: "Starbucks corps",
    ticker: "SBUX",
    percentage: "28.4%",
    market_value: "$15,248.9",
  },
  {
    id: 1,
    security_name: "Starbucks corps",
    ticker: "SBUX",
    percentage: "28.4%",
    market_value: "$15,248.9",
  },
  {
    id: 2,
    security_name: "Starbucks corps",
    ticker: "SBUX",
    percentage: "28.4%",
    market_value: "$15,248.9",
  },
  {
    id: 3,
    security_name: "Starbucks corps",
    ticker: "SBUX",
    percentage: "28.4%",
    market_value: "$15,248.9",
  },
  {
    id: 4,
    security_name: "Starbucks corps",
    ticker: "SBUX",
    percentage: "28.4%",
    market_value: "$15,248.9",
  },
  {
    id: 5,
    security_name: "Starbucks corps",
    ticker: "SBUX",
    percentage: "28.4%",
    market_value: "$15,248.9",
  },
  {
    id: 6,
    security_name: "Starbucks corps",
    ticker: "SBUX",
    percentage: "28.4%",
    market_value: "$15,248.9",
  },
];

export default function PositionList() {
  return (
    <FlatList
      data={positionsData}
      renderItem={({ item }: { item: IPositionsCard }) => (
        <PositionCard data={item} />
      )}
      keyExtractor={(item: IPositionsCard) => item.id}
    />
  );
}
