import React, { useEffect } from "react";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { AuthProvider } from "../context/AuthProvider";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider config={config}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <AuthProvider>
          <Stack>
            <Stack.Screen
              name="(auth)/Onboarding"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="(modals)/AddEstateModal"
              options={{ presentation: "modal", title: "Add Estate" }}
            />
            <Stack.Screen
              name="(modals)/AddGoalModal"
              options={{ presentation: "modal", title: "Add Goal" }}
            />
            <Stack.Screen
              name="profile/Profile"
              options={{ headerTitle: "Profile", headerTransparent: false }}
            />
            <Stack.Screen
              name="profile/AccountDetail"
              options={{ headerTitle: "Account Details" }}
            />
            <Stack.Screen
              name="profile/Settings"
              options={{ headerTitle: "Settings" }}
            />
            <Stack.Screen
              name="profile/HelpSupport"
              options={{ headerTitle: "Help & Support" }}
            />
            <Stack.Screen
              name="profile/TermsCondition"
              options={{ headerTitle: "Terms & Condition" }}
            />
            <Stack.Screen
              name="(modals)/AddHoldingsAccountModal"
              options={{ presentation: "modal", title: "Add Holdings Account" }}
            />
            <Stack.Screen
              name="insights/[insight]"
              options={{ headerTitle: "", headerTransparent: true }}
            />
          </Stack>
        </AuthProvider>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
