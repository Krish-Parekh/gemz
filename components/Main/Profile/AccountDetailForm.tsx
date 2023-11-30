import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Button,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";

export default function AccountDetailForm() {
  const [permissionsGranted, setPermissionsGranted] = useState(false);
  const [formData, setFormData] = useState({
    avatar: "", // Store the avatar URI in the form data
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
  });

  useEffect(() => {
    if (!permissionsGranted) {
      (async () => {
        const mediaLibraryPermission =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        setPermissionsGranted(mediaLibraryPermission.status === "granted");
      })();
    }
  }, [permissionsGranted]);

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFormData({
        ...formData,
        avatar: result.assets[0].uri, // Update the avatar URI in the form data
      });
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("Form Data:", formData);
  };

  return (
    <VStack style={styles.container}>
      <VStack space="md" alignItems="center">
        <Avatar size="xl">
          {formData.avatar ? (
            <AvatarImage source={{ uri: formData.avatar }} />
          ) : (
            <AvatarFallbackText>Krish Parekh</AvatarFallbackText>
          )}
        </Avatar>
        <TouchableOpacity onPress={handleImagePick}>
          <Text>Change Avatar</Text>
        </TouchableOpacity>
      </VStack>

      <VStack space="md">
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>First Name</FormControlLabelText>
          </FormControlLabel>
          <Input size="sm" borderColor="black">
            <InputField
              placeholder="First Name"
              type="text"
              returnKeyType="next"
              value={formData.firstName}
              onChangeText={(value: string) => {
                handleInputChange("firstName", value);
              }}
            />
          </Input>
        </FormControl>
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Last Name</FormControlLabelText>
          </FormControlLabel>
          <Input size="sm" borderColor="black">
            <InputField
              placeholder="Last Name"
              type="text"
              returnKeyType="next"
              value={formData.lastName}
              onChangeText={(value: string) => {
                handleInputChange("lastName", value);
              }}
            />
          </Input>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Mobile Number</FormControlLabelText>
          </FormControlLabel>
          <Input size="sm" borderColor="black">
            <InputField
              placeholder="Mobile Number"
              type="text"
              returnKeyType="next"
              value={formData.mobileNumber}
              onChangeText={(value: string) => {
                handleInputChange("mobileNumber", value);
              }}
            />
          </Input>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Email ID</FormControlLabelText>
          </FormControlLabel>
          <Input size="sm" borderColor="black">
            <InputField
              placeholder="Email ID"
              type="text"
              returnKeyType="next"
              value={formData.email}
              onChangeText={(value: string) => {
                handleInputChange("email", value);
              }}
            />
          </Input>
        </FormControl>

        <Button onPress={handleSave}>
          <ButtonText>Save</ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
