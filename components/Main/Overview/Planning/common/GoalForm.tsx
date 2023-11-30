import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  Button,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Input,
  InputField,
  VStack,
} from "@gluestack-ui/themed";

const assetClassPreferences = [
  "Equity",
  "Fixed Income",
  "Alternatives",
  "Cash",
];

const returnExpectations = ["High", "Medium", "Low"];

interface FormData {
  goalName: string;
  assetClassPreference: string;
  investmentHorizon: string;
  returnExpectations: string;
}

export default function GoalForm() {
  const [formData, setFormData] = useState<FormData>({
    goalName: "",
    assetClassPreference: "Equity",
    investmentHorizon: "",
    returnExpectations: "High",
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

  const handleClear = () => {
    setFormData({
      goalName: "",
      assetClassPreference: "Equity",
      investmentHorizon: "",
      returnExpectations: "High",
    });
  };

  return (
    <VStack style={styles.container}>
      <VStack space="lg">
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText size="sm">Goal Name</FormControlLabelText>
          </FormControlLabel>
          <Input size="sm" borderColor="black">
            <InputField
              placeholder="Username"
              type="text"
              value={formData.goalName}
              onChangeText={(value: string) => {
                handleInputChange("goalName", value);
              }}
              returnKeyType="next"
            />
          </Input>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText size="sm">
              Asset Class Preference
            </FormControlLabelText>
          </FormControlLabel>
          <HStack space="md">
            {assetClassPreferences.map((assetClass) => (
              <TouchableOpacity
                style={[
                  styles.selectButton,
                  assetClass === formData.assetClassPreference &&
                    styles.activeSelectButton,
                ]}
                key={assetClass}
                onPress={() => {
                  handleSelectPress("assetClassPreference", assetClass);
                }}
              >
                <Text
                  style={[
                    styles.selectButtonText,
                    assetClass === formData.assetClassPreference &&
                      styles.activeSelectButtonText,
                  ]}
                >
                  {assetClass}
                </Text>
              </TouchableOpacity>
            ))}
          </HStack>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText size="sm">
              Investment Horizon
            </FormControlLabelText>
          </FormControlLabel>
          <Input size="sm" borderColor="black">
            <InputField
              placeholder="Username"
              type="text"
              value={formData.investmentHorizon}
              onChangeText={(value: string) => {
                handleInputChange("investmentHorizon", value);
              }}
              returnKeyType="next"
            />
          </Input>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText size="sm">
              Return Expectations
            </FormControlLabelText>
          </FormControlLabel>
          <HStack space="md">
            {returnExpectations.map((returns) => (
              <TouchableOpacity
                style={[
                  styles.selectButton,
                  returns === formData.returnExpectations &&
                    styles.activeSelectButton,
                ]}
                key={returns}
                onPress={() => {
                  handleSelectPress("returnExpectations", returns);
                }}
              >
                <Text
                  style={[
                    styles.selectButtonText,
                    returns === formData.returnExpectations &&
                      styles.activeSelectButtonText,
                  ]}
                >
                  {returns}
                </Text>
              </TouchableOpacity>
            ))}
          </HStack>
        </FormControl>
      </VStack>
      <VStack space="md">
        <Button onPress={handleSubmit}>
          <ButtonText>Submit</ButtonText>
        </Button>
        <Button variant="outline" onPress={handleClear}>
          <ButtonText>Clear</ButtonText>
        </Button>
      </VStack>
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
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
    width: "100%",
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
  },
});
