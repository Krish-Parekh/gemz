import React from "react";
import { StyleSheet } from "react-native";
import { Text, VStack } from "@gluestack-ui/themed";
const termsCondition = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Nullam consectetur orci sed nulla facilisis, et pulvinar mauris
tincidunt. Donec ultricies, nisl sed malesuada aliquet, est erat`;

export default function TermsCondition() {
  return (
    <VStack style={styles.container}>
      <Text>{termsCondition}</Text>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 16,
  },
});
