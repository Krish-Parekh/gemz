import React, { useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import {
  Box,
  Button,
  ButtonText,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
} from "@gluestack-ui/themed";

import OtpIllustration from "../../assets/images/otp-illustration.svg";
import { AuthContext } from "../../context/AuthProvider";
import { useAuthServerMutation } from "../../hooks/useMutation";
import buildURLSearchParams from "../../lib/buildURLSearchParams";

const OTP_WAIT_TIME = 60;

export default function VerifyOTP() {
  const [seconds, setSeconds] = useState(OTP_WAIT_TIME);
  const [otpValues, setOtpValues] = useState(Array(6).fill("")); // State to store OTP values
  const authContext = useContext(AuthContext);

  const { user_id, next_path } = useLocalSearchParams();

  const { trigger, isMutating } = useAuthServerMutation<any, any>(
    "/verify-otp",
    {
      onSuccess(data) {
        const { access_token, refresh_token } = data;
        if (access_token && refresh_token) {
          // ToastAndroid.show("OTP Send", ToastAndroid.SHORT);
          // ${buildURLSearchParams({
          //   phone_number: data.phone_number,
          //   user_id: data.user_id.toString(),
          //   next_path: "/ResetPassword",
          // })}`
          switch (next_path) {
            case "/ResetPassword": {
              router.push(
                `${next_path}${buildURLSearchParams({
                  phone_number: data.phone_number,
                  user_id: data.user_id.toString(),
                  next_path: "/ResetPassword",
                })}` as any,
              );
              break;
            }
            default: {
              (async () => {
                authContext.setAuthState({
                  ...authContext.authState,
                  authenticated: true,
                  accessToken: access_token,
                });
                authContext.saveTokenToSecureStore("accessToken", access_token);
                authContext.saveTokenToSecureStore(
                  "refreshToken",
                  access_token,
                );
              })();
              router.push(next_path as any);
              break;
            }
          }
        }
      },
      onError() {
        // ToastAndroid.show("OTP Send", ToastAndroid.SHORT);
      },
    },
  );
  const resendOTPEnabled = seconds === 0;
  const inputRefs = Array(6)
    .fill(null)
    .map(() => useRef<TextInput | null>(null));

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleInputChange = (index: number, val: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = val;
    setOtpValues(newOtpValues);

    if (val.length >= 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1]?.current?.focus();
    } else if (val.length < 1 && index > 0) {
      inputRefs[index - 1]?.current?.focus();
    }
  };

  function resendOtp() {
    setSeconds(OTP_WAIT_TIME);
    if (!resendOTPEnabled) return;
  }

  const handleSubmit = () => {
    trigger({
      otp: otpValues.join(""),
      user_id,
    });
  };

  return (
    <Box h="100%" justifyContent="center" p="$6">
      <VStack space="3xl" reversed={false}>
        <Heading textAlign="center" size="xl">
          OTP Verification
        </Heading>
        <Center>
          <OtpIllustration />
        </Center>
        <HStack space="sm" reversed={false} justifyContent="center">
          {inputRefs.map((inputRef, index) => (
            <TextInput
              key={index}
              ref={inputRef}
              style={styles.inputView}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(val) => {
                handleInputChange(index, val);
              }}
            />
          ))}
        </HStack>
        <Text textAlign="center" fontWeight="bold">
          Didn&apos;t receive OTP?{" "}
          <Text
            onPress={resendOtp}
            color={resendOTPEnabled ? "#1890FF" : "grey"}
            fontWeight="bold"
          >
            Resend Code
            {resendOTPEnabled
              ? ""
              : ` (0:${seconds.toString().padStart(2, "0")})`}
          </Text>
        </Text>
        <Button
          size="lg"
          isDisabled={isMutating}
          borderRadius="$lg"
          bg="#1890FF"
          onPress={() => {
            handleSubmit();
          }}
        >
          <ButtonText>Verify</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  inputView: {
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 18,
    fontWeight: "700",
    height: 50,
    textAlign: "center",
    width: 50,
  },
});
