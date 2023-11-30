import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { HStack, Icon, Text } from "@gluestack-ui/themed";

import { AuthContext } from "../../../context/AuthProvider";

import {
  ChevronRight,
  ClipboardList,
  Crown,
  LifeBuoy,
  LogOut,
  Settings,
  UserCircle2,
} from "lucide-react-native";

const items = [
  {
    icon: <Icon as={UserCircle2} size="xl" />,
    text: "Account Details",
    onPress: () => {
      router.push("/profile/AccountDetail");
    },
  },
  {
    icon: <Icon as={Settings} size="xl" />,
    text: "Settings",
    onPress: () => {
      router.push("/profile/Settings");
    },
  },
  {
    icon: <Icon as={Crown} size="xl" />,
    text: "Subscription Plans",
    onPress: () => {
      router.push("/profile/SubscriptionPlans");
    },
  },
  {
    icon: <Icon as={LifeBuoy} size="xl" />,
    text: "Help & Support",
    onPress: () => {
      router.push("/profile/HelpSupport");
    },
  },
  {
    icon: <Icon as={ClipboardList} size="xl" />,
    text: "Terms & Condition",
    onPress: () => {
      router.push("/profile/TermsCondition");
    },
  },
];

interface IProfileItemProps {
  icon: React.ReactNode;
  text: string;
  onPress: () => void;
}

function Item({ icon, text, onPress }: IProfileItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack
        style={styles.itemContainer}
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack space="lg">
          {icon}
          <Text style={styles.itemText}>{text}</Text>
        </HStack>
        <Icon as={ChevronRight} size="lg" />
      </HStack>
    </TouchableOpacity>
  );
}

export default function ProfileItems() {
  const { logout } = useContext(AuthContext);
  const profileItems = [
    ...items,
    {
      icon: <Icon as={LogOut} size="xl" />,
      text: "Logout",
      onPress: () => {
        logout();
        router.replace("/(auth)/Onboarding");
      },
    },
  ];
  return (
    <>
      {profileItems.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
  },
  itemText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
