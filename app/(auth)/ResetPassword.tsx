import React, { useState } from "react";
import { router } from "expo-router";
import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Center,
  ChevronRightIcon,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  VStack,
} from "@gluestack-ui/themed";

import Logo from "../../assets/images/logo.svg";
import { useAuthServerMutation } from "../../hooks/useMutation";

import { Lock } from "lucide-react-native";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    new_password: "",
    confirm_new_password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({
    new_password: "",
    confirm_new_password: "",
  });

  const { trigger, isMutating } = useAuthServerMutation<any, any>(
    "/reset-password",
    {
      onSuccess: () => {
        router.push("/(auth)/Login");
      },
      onError: (_data) => {},
    },
  );

  function handleVisibility() {
    setShowPassword(!showPassword);
  }

  function handleChange(name: string, value: string) {
    setCredentials((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  }

  function validateForm() {
    const newErrors = {
      password: "",
      confirmPassword: "",
    };
    if (!credentials.new_password) {
      newErrors.password = "Password is required";
    }
    if (!credentials.confirm_new_password) {
      newErrors.confirmPassword = "Confirm Password is required";
    }
    setErrors(newErrors);
    return newErrors.password === "" && newErrors.confirmPassword === "";
  }

  const handleReset = () => {
    if (validateForm()) {
      trigger({
        new_password: credentials.confirm_new_password,
      });
    }
  };
  return (
    <Box h="100%" justifyContent="center" p="$6">
      <Center>
        <Logo />
      </Center>
      <VStack space="3xl" reversed={false} mt="$20">
        <FormControl>
          <FormControlLabel mb="$1">
            <FormControlLabelText>Enter new password</FormControlLabelText>
          </FormControlLabel>
          <Input
            size="xl"
            borderRadius="$lg"
            borderWidth="$2"
            borderColor="black"
          >
            <InputSlot pl="$3">
              <InputIcon as={Lock} color="black" />
            </InputSlot>
            <InputField
              type={showPassword ? "text" : "password"}
              placeholder="password"
              fontSize="$md"
              value={credentials.new_password}
              onChangeText={(val: string) => {
                handleChange("new_password", val);
              }}
            />
            <InputSlot pr="$3" onPress={handleVisibility}>
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
            </InputSlot>
          </Input>
        </FormControl>
        <FormControl>
          <FormControlLabel mb="$1">
            <FormControlLabelText>Confirm Password</FormControlLabelText>
          </FormControlLabel>
          <Input
            size="xl"
            borderRadius="$lg"
            borderWidth="$2"
            borderColor="black"
          >
            <InputSlot pl="$3">
              <InputIcon as={Lock} color="black" />
            </InputSlot>
            <InputField
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              fontSize="$md"
              value={credentials.confirm_new_password}
              onChangeText={(val: string) => {
                handleChange("confirm_new_password", val);
              }}
            />
            <InputSlot pr="$3" onPress={handleVisibility}>
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
            </InputSlot>
          </Input>
        </FormControl>
      </VStack>
      {/* <Link href={"/Login"} asChild> */}
      <Button
        size="lg"
        borderRadius="$lg"
        bg="#1890FF"
        mt="$10"
        flexDirection="row"
        alignItems="center"
        onPress={() => {
          handleReset();
        }}
        disabled={isMutating}
      >
        <ButtonText>Proceed</ButtonText>
        <ButtonIcon
          as={ChevronRightIcon}
          h="$7"
          w="$7"
          ml="$3"
          mt="$1"
          strokeWidth={3}
        />
      </Button>
      {/* </Link> */}
    </Box>
  );
}
