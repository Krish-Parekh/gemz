import React from "react";
import { FlatList } from "@gluestack-ui/themed";

import { type IPerformerCard } from "../Performers";

import PerformerCard from "./PerformerCard";

interface IPlanningListProps {
  selectedTab: number;
}
const gainerData: IPerformerCard[] = [
  {
    id: 1,
    name: "Meta Platforms Inc",
    percentage: "99.4%",
    total_pl: "107.27K",
  },
  {
    id: 2,
    name: "Meta Platforms Inc",
    percentage: "99.4%",
    total_pl: "107.27K",
  },
  {
    id: 3,
    name: "Meta Platforms Inc",
    percentage: "99.4%",
    total_pl: "107.27K",
  },
];

const loserData: IPerformerCard[] = [
  {
    id: 1,
    name: "Meta Platforms Inc",
    percentage: "99.4%",
    total_pl: "107.27K",
  },
  {
    id: 2,
    name: "Meta Platforms Inc",
    percentage: "99.4%",
    total_pl: "107.27K",
  },
  {
    id: 3,
    name: "Meta Platforms Inc",
    percentage: "99.4%",
    total_pl: "107.27K",
  },
];
export default function PlanningList({ selectedTab }: IPlanningListProps) {
  if (selectedTab === 0) {
    return (
      <FlatList
        data={gainerData}
        renderItem={({ item }: { item: IPerformerCard }) => (
          <PerformerCard data={item} />
        )}
        keyExtractor={(item: IPerformerCard) => item.id}
      />
    );
  }
  return (
    <FlatList
      data={loserData}
      renderItem={({ item }: { item: IPerformerCard }) => (
        <PerformerCard data={item} />
      )}
      keyExtractor={(item: IPerformerCard) => item.id}
    />
  );
}
