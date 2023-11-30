import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Text, VStack } from "@gluestack-ui/themed";

import PerformerList from "./common/PerformerList";
import PerformerSwitch from "./common/PerformerSwitch";

export interface IPerformerCard {
  id: number;
  name: string;
  percentage: string;
  total_pl: string;
}

export default function Performers() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleSelectedTab = (selectedTab: number) => {
    setSelectedTab(selectedTab);
  };

  return (
    <VStack space="md">
      <PerformerSwitch
        selectedTab={selectedTab}
        setSelectedTab={handleSelectedTab}
      />
      {selectedTab === 0 ? (
        <Text>Top Gain: 20.74K</Text>
      ) : (
        <Text>Top Loss: -809.72K</Text>
      )}
      <SafeAreaView style={{ flex: 1 }}>
        <PerformerList selectedTab={selectedTab} />
      </SafeAreaView>
    </VStack>
  );
}
