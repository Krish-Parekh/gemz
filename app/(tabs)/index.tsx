import React, { useContext, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import {
  Avatar,
  AvatarFallbackText,
  Heading,
  HStack,
  ScrollView,
  Text,
  View,
  VStack,
} from "@gluestack-ui/themed";

import Listings from "../../components/Main/Overview/Listings";
import Colors from "../../constants/Colors";
import { AuthContext } from "../../context/AuthProvider";

export default function index() {
  const { getTokenFromSecureStore } = useContext(AuthContext);

  const initializeAuthState = async () => {
    // Retrieve the access token from SecureStore
    const accessToken = await getTokenFromSecureStore("accessToken");
    // If there is a stored access token, set the authentication state
    if (!accessToken) {
      router.replace("/(auth)/Onboarding");
    }
  };
  useEffect(() => {
    // Initialize the authentication state
    initializeAuthState();
  }, []);

  return (
    <View bg="#fff" height="100%">
      <ScrollView>
        <VStack space="2xl" mt="$10" py="$5" px="$3">
          <HStack>
            <TouchableOpacity
              onPress={() => {
                router.push("/profile/Profile");
              }}
            >
              <Avatar>
                <AvatarFallbackText>Krish Parekh</AvatarFallbackText>
              </Avatar>
            </TouchableOpacity>
          </HStack>
          <View
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <VStack space="none">
              <Heading fontWeight="light">Welcome,</Heading>
              <Heading fontWeight="light">Krish Parekh</Heading>
            </VStack>
            <VStack>
              <Text size="sm" color={Colors.dark}>
                Your daily profit
              </Text>
              <Text size="sm" color={Colors.dark}>
                SGD 35K
              </Text>
            </VStack>
          </View>
          <Listings />
        </VStack>
      </ScrollView>
    </View>
  );
}
