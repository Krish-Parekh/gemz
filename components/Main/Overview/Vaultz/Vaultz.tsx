import React from "react";
import { VStack } from "@gluestack-ui/themed";
import Header from "./common/Header";
import VaultzList from "./common/VaultzList";

export default function Vaultz() {
  return <VStack space="md">
    <Header heading={"Recently Added"} />
    <VaultzList />
  </VStack>
}
