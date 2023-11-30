import React from "react";
import { StyleSheet } from "react-native";
import { HStack, Text } from "@gluestack-ui/themed";


interface IHeader {
  heading: string;
}

export default function Header({ heading }: IHeader) {

  return (
    <HStack style={styles.headerContainer}>
      <Text style={styles.title}>{heading}</Text>
    </HStack>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
