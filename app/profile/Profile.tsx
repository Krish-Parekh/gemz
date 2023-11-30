import React from "react";
import { StyleSheet } from "react-native";
import {
  Avatar,
  AvatarFallbackText,
  HStack,
  Text,
  VStack,
} from "@gluestack-ui/themed";

import ProfileItems from "../../components/Main/Profile/ProfileItems";

export default function Profile() {
  return (
    <VStack space="md" style={styles.container}>
      <HStack space="lg" alignItems="center">
        <Avatar size="lg">
          <AvatarFallbackText>Krish Parekh</AvatarFallbackText>
        </Avatar>
        <VStack alignItems="start">
          <Text style={styles.name}>Krish Parekh</Text>
          <Text style={styles.email}>krishp4123@gmail.com</Text>
          <Text style={styles.phone}>+91 83560 56213</Text>
        </VStack>
      </HStack>
      <ProfileItems />
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 16,
  },

  email: {
    fontSize: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phone: {
    fontSize: 14,
  },
});
