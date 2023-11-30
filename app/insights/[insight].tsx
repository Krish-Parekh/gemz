import React from "react";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, View, VStack } from "@gluestack-ui/themed";

import Holdings from "../../components/Main/Overview/Holdings/Holdings";
import Performers from "../../components/Main/Overview/Performers/Performers";
import Positions from "../../components/Main/Overview/Positions/Positions";
import Transactions from "../../components/Main/Overview/Transactions/Transactions";
import { type TInsights } from "../../interfaces/Main";

function List(type: TInsights): React.ReactNode {
  switch (type) {
    case "positions":
      return <Positions />;
    case "holdings":
      return <Holdings />;
    case "performers":
      return <Performers />;
    case "transactions":
      return <Transactions />;
    default:
      return null;
  }
}

export default function Insight() {
  const { insight } = useLocalSearchParams<{ insight: TInsights }>();
  return (
    <View bg="#fff" height="100%">
      <ScrollView>
        <VStack space="2xl" mt="$20" py="$5" px="$3">
          {List(insight)}
        </VStack>
      </ScrollView>
    </View>
  );
}
