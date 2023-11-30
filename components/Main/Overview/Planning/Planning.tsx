import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { VStack } from "@gluestack-ui/themed";

import PlanningHeader from "./common/PlanningHeader";
import PlanningList from "./common/PlanningList";
import SwitchButton from "./common/SwitchButton";

export interface IEstateCard {
  id: number;
  name: string;
  relationship: string;
  email: string;
  dob: string;
  phoneNumber: string;
  sharePercentage: string;
}

export interface IGoalCard {
  id: number;
  name: string;
  assetClassPreference: string[];
  investmentHorizon: number;
  returnExpectations: string;
}

export default function Planning() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleSelectedTab = (selectedTab: number) => {
    setSelectedTab(selectedTab);
  };

  return (
    <VStack space="md">
      <SwitchButton
        selectedTab={selectedTab}
        setSelectedTab={handleSelectedTab}
      />
      <PlanningHeader selectedTab={selectedTab} />
      <SafeAreaView style={{ flex: 1 }}>
        <PlanningList selectedTab={selectedTab} />
      </SafeAreaView>
    </VStack>
  );
}
