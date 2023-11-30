import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Input,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";

interface FormData {
  legacy: string;
  estateType: string;
  email: string;
  phoneNumber: string;
  relationship: string;
  sharePercentage: string;
}

const estateTypes = ["Nominee", "Beneficiary - Trust", "Beneficiary - Person"];

export default function EstateForm() {
  const [formData, setFormData] = useState<FormData>({
    legacy: "",
    estateType: "",
    email: "",
    phoneNumber: "",
    relationship: "",
    sharePercentage: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSelectPress = (field: keyof FormData, option: string) => {
    setFormData({
      ...formData,
      [field]: option,
    });
  };

  const handleSubmit = () => {
    console.log("Form data submitted:", formData);
  };

  return (
    <VStack style={styles.container} space="lg">
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText size="sm">Legacy</FormControlLabelText>
        </FormControlLabel>
        <Input size="sm" borderColor="black">
          <InputField
            placeholder="Username"
            type="text"
            value={formData.legacy}
            onChangeText={(value: string) => {
              handleInputChange("legacy", value);
            }}
            returnKeyType="next"
          />
        </Input>
      </FormControl>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Estate Type</FormControlLabelText>
        </FormControlLabel>
        <HStack space="md" style={styles.estateContainer}>
          {estateTypes.map((estateType) => {
            return (
              <TouchableOpacity
                style={[
                  styles.selectButton,
                  estateType === formData.estateType &&
                    styles.activeSelectButton,
                ]}
                key={estateType}
                onPress={() => {
                  handleSelectPress("estateType", estateType);
                }}
              >
                <Text
                  style={[
                    styles.selectButtonText,
                    estateType === formData.estateType &&
                      styles.activeSelectButtonText,
                  ]}
                >
                  {estateType}
                </Text>
              </TouchableOpacity>
            );
          })}
        </HStack>
      </FormControl>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText size="sm">Email</FormControlLabelText>
        </FormControlLabel>
        <Input size="sm" borderColor="black">
          <InputField
            placeholder="Enter Email"
            type="text"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(value: string) => {
              handleInputChange("email", value);
            }}
            returnKeyType="next"
          />
        </Input>
      </FormControl>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText size="sm">Phone Number</FormControlLabelText>
        </FormControlLabel>
        <Input borderColor="black" size="sm">
          <InputField
            keyboardType="number-pad"
            placeholder="Enter Phone Number"
            value={formData.phoneNumber}
            onChangeText={(value: string) => {
              handleInputChange("phoneNumber", value);
            }}
            returnKeyType="next"
          />
        </Input>
      </FormControl>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText size="sm">Relationship</FormControlLabelText>
        </FormControlLabel>
        <Input borderColor="black" size="sm">
          <InputField
            type="text"
            placeholder="Enter Relationship"
            value={formData.relationship}
            onChangeText={(value: string) => {
              handleInputChange("relationship", value);
            }}
            returnKeyType="next"
          />
        </Input>
      </FormControl>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText size="sm">
            Share Percentage
          </FormControlLabelText>
        </FormControlLabel>
        <Input borderColor="black" size="sm">
          <InputField
            keyboardType="decimal-pad"
            placeholder="Enter Share Percentage"
            value={formData.sharePercentage}
            onChangeText={(value: string) => {
              handleInputChange("sharePercentage", value);
            }}
            returnKeyType="done"
          />
        </Input>
      </FormControl>

      <Button onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Button>
    </VStack>
  );
}

const styles = StyleSheet.create({
  activeSelectButton: {
    backgroundColor: "#1890FF",
    borderRadius: 4,
    padding: 8,
  },
  activeSelectButtonText: {
    color: "white",
  },
  buttonText: {
    color: "white",
  },
  container: {
    padding: 16,
  },
  estateContainer: {
    flexWrap: "wrap",
  },
  selectButton: {
    backgroundColor: "#DDEFFF",
    borderColor: "#1890FF",
    borderRadius: 4,
    borderWidth: 1,
    padding: 8,
  },
  selectButtonText: {
    color: "black",
    fontSize: 14,
  },
});
