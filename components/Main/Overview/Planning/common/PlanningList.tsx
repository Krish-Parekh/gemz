import React from "react";
import { FlatList } from "@gluestack-ui/themed";

import { type IEstateCard, type IGoalCard } from "../Planning";

import EstateCard from "./EstateCard";
import GoalCard from "./GoalCard";

interface IPlanningListProps {
  selectedTab: number;
}
const estateData: IEstateCard[] = [
  {
    id: 1,
    name: "John Doe",
    relationship: "Father",
    email: "john@gmail.com",
    dob: "01/01/1990",
    phoneNumber: "+65 12345678",
    sharePercentage: "50",
  },
  {
    id: 2,
    name: "John Doe",
    relationship: "Father",
    email: "john@gmail.com",
    dob: "01/01/1990",
    phoneNumber: "+65 12345678",
    sharePercentage: "50",
  },
  {
    id: 3,
    name: "John Doe",
    relationship: "Father",
    email: "john@gmail.com",
    dob: "01/01/1990",
    phoneNumber: "+65 12345678",
    sharePercentage: "50",
  },
];

const goalData: IGoalCard[] = [
  {
    id: 1,
    name: "Retirement",
    assetClassPreference: ["Stocks", "Bonds", "Real Estate"],
    investmentHorizon: 20,
    returnExpectations: "Moderate",
  },
  {
    id: 2,
    name: "Education Fund",
    assetClassPreference: ["Bonds", "Savings", "ETFs"],
    investmentHorizon: 15,
    returnExpectations: "Conservative",
  },
  {
    id: 3,
    name: "Travel",
    assetClassPreference: ["Stocks", "Real Estate", "Cryptocurrency"],
    investmentHorizon: 5,
    returnExpectations: "Aggressive",
  },
];

export default function PlanningList({ selectedTab }: IPlanningListProps) {
  if (selectedTab === 0) {
    return (
      <FlatList
        data={goalData}
        renderItem={({ item }: { item: IGoalCard }) => <GoalCard data={item} />}
        keyExtractor={(item: IGoalCard) => item.id}
      />
    );
  }
  return (
    <FlatList
      data={estateData}
      renderItem={({ item }: { item: IEstateCard }) => (
        <EstateCard data={item} />
      )}
      keyExtractor={(item: IEstateCard) => item.id}
    />
  );
}
