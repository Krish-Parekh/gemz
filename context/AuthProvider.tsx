import React, { createContext, useCallback, useEffect, useState } from "react";
import { Alert, AppState, type AppStateStatus } from "react-native";
import * as SecureStore from "expo-secure-store";

import { useAuthServerMutation } from "../hooks/useMutation";

import { decode } from "base-64";

const AuthContext = createContext<any>(null);
const { Provider } = AuthContext;

// Function to save a key-value pair to SecureStore
async function save(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

// Function to retrieve the value for a key from SecureStore
async function getValueFor(key: string) {
  const result: any = await SecureStore.getItemAsync(key);
  return result;
}

const REFRESH_OFFSET = 300;

const AuthProvider = ({ children }: any) => {
  // State to manage authentication-related information
  const [authState, setAuthState] = useState({
    accessToken: null,
    refreshToken: null,
    authenticated: false,
  });

  // Function to save a token to SecureStore
  const saveTokenToSecureStore = async (key: string, value: string) => {
    try {
      await save(key, value);
    } catch (error) {
      console.error("Error saving token to SecureStore:", error);
    }
  };

  // Function to retrieve a token from SecureStore
  const getTokenFromSecureStore = async (key: string) => {
    try {
      const result = await getValueFor(key);
      return result;
    } catch (error) {
      console.error("Error getting token from SecureStore:", error);
      return null;
    }
  };

  // Function to extract expiration time from a JWT token
  const getTimeoutFromToken = (token: string): number => {
    try {
      // Extract the payload part of the JWT token
      const payloadBase64 = token.split(".")[1];

      // Decode the payload using base-64 decoding
      const decodedPayload = decode(payloadBase64);

      // Parse the decoded payload as JSON
      const decodedToken: any = JSON.parse(decodedPayload);

      // Calculate the expiration time in milliseconds
      const expirationTime = decodedToken.exp * 1000;
      return expirationTime;
    } catch (error) {
      console.error("Error decoding token:", error);
      return 0; // Return 0 or some default value in case of an error
    }
  };

  // Use a custom hook for making a refresh token request
  const { trigger } = useAuthServerMutation<any, any>("/token/refresh/", {
    onSuccess(data: any) {
      // On successful refresh, update the access token and save it to SecureStore
      const accessToken = data.access;
      if (accessToken) {
        setAuthState((prevAuthState) => ({
          ...prevAuthState,
          accessToken,
        }));
        saveTokenToSecureStore("accessToken", accessToken);
      }
    },
    onError() {
      Alert.alert("Error", "Failed to fetch the access token.");
    },
  });

  // Function to refresh the access token
  const refresh = useCallback(async () => {
    await trigger({ refresh: authState.refreshToken });
  }, [trigger, authState.refreshToken]);

  // Function to handle logout
  const logout = useCallback((msg?: string) => {
    // Clear authentication state
    setAuthState({
      accessToken: null,
      refreshToken: null,
      authenticated: false,
    });
    // Clear tokens from SecureStore upon logout
    saveTokenToSecureStore("accessToken", "");
    saveTokenToSecureStore("refreshToken", "");
    // Display an optional logout message
    if (msg) {
      Alert.alert("Info", msg);
    }
  }, []);

  // Effect to handle app state changes
  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (
        nextAppState === "active" &&
        !authState.accessToken &&
        authState.refreshToken
      ) {
        // If the app becomes active and there is a refresh token, trigger a refresh
        refresh();
      }
    };

    // Subscribe to app state changes
    const appStateSubscription = AppState.addEventListener(
      "change",
      handleAppStateChange,
    );

    // Cleanup: Remove the subscription when the component is unmounted
    return () => {
      appStateSubscription.remove();
    };
  }, [refresh, authState]);

  // Effect to initialize the component
  useEffect(() => {
    const initializeAuthState = async () => {
      // Retrieve the access token from SecureStore
      const accessToken = await getTokenFromSecureStore("accessToken");
      // If there is a stored access token, set the authentication state
      if (accessToken) {
        setAuthState((prevAuthState) => ({
          ...prevAuthState,
          accessToken,
          authenticated: true,
        }));
      }

      // ... (Check and set other state properties like refreshToken)
    };

    // Initialize the authentication state
    initializeAuthState();
  }, []); // Only run this effect once during component initialization

  // Effect to handle access token expiration
  useEffect(() => {
    if (authState.accessToken) {
      try {
        // Calculate the time remaining until the access token expires
        const accessTimeout = setTimeout(
          refresh,
          Math.max(
            getTimeoutFromToken(authState.accessToken) - REFRESH_OFFSET,
            0,
          ),
        );

        // Cleanup: Clear the timeout when the component is unmounted or when the access token is refreshed
        return () => {
          clearTimeout(accessTimeout);
        };
      } catch {
        // Do nothing on error
      }
    }

    // If there is a refresh token, trigger a refresh
    if (authState.refreshToken) {
      refresh();
    }

    // Cleanup: Return an empty cleanup function
    return () => undefined;
  }, [refresh, authState]);

  // Effect to handle refresh token expiration
  useEffect(() => {
    if (authState.refreshToken) {
      try {
        // Calculate the time remaining until the refresh token expires
        const refreshTimeout = setTimeout(() => {
          // If the refresh token expires, trigger a logout with an optional message
          logout("Session expired. Please log in again.");
        }, getTimeoutFromToken(authState.refreshToken));

        // Cleanup: Clear the timeout when the component is unmounted or when the refresh token is refreshed
        return () => {
          clearTimeout(refreshTimeout);
        };
      } catch (error) {
        // If there is an error, trigger a logout
        logout();
      }
    }

    // Cleanup: Return an empty cleanup function
    return () => undefined;
  }, [authState.refreshToken, logout]);

  // ... (Rest of the code)

  // Render the AuthContext.Provider with the authentication-related values
  return (
    <Provider
      value={{
        authState,
        getAccessToken: () => authState.accessToken,
        setAuthState,
        logout,
        saveTokenToSecureStore,
        getTokenFromSecureStore,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
