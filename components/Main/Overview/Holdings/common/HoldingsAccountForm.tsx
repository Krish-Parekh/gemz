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

const custodian = ["LGT", "DBS", "BOS", "JBS", "SCB"];

interface FormData {
  custodian: string;
  accountNumber: string;
  accountType: string;
  relationshipNumber: string;
  currency: string;
}

export default function GoalForm() {
  const [formData, setFormData] = useState<FormData>({
    accountNumber: "",
    custodian: "LGT",
    accountType: "",
    relationshipNumber: "",
    currency: "",
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
      accountNumber: "",
      custodian: "LGT",
      accountType: "",
      relationshipNumber: "",
      currency: "",
    });
  };

  return (
    <VStack style={styles.container}>
      <VStack space="lg">
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText size="sm">Custodians</FormControlLabelText>
          </FormControlLabel>
          <HStack space="md">
            {custodian.map((name) => (
              <TouchableOpacity
                style={[
                  styles.selectButton,
                  name === formData.custodian && styles.activeSelectButton,
                ]}
                key={name}
                onPress={() => {
                  handleSelectPress("custodian", name);
                }}
              >
                <Text
                  style={[
                    styles.selectButtonText,
                    name === formData.custodian &&
                      styles.activeSelectButtonText,
                  ]}
                >
                  {name}
                </Text>
              </TouchableOpacity>
            ))}
          </HStack>
        </FormControl>
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText size="sm">
              Account number
            </FormControlLabelText>
          </FormControlLabel>
          <Input size="sm" borderColor="black">
            <InputField
              placeholder="Account Number"
              type="text"
              value={formData.accountNumber}
              onChangeText={(value: string) => {
                handleInputChange("accountNumber", value);
              }}
              returnKeyType="next"
            />
          </Input>
        </FormControl>
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText size="sm">Account Type</FormControlLabelText>
          </FormControlLabel>
          <Input size="sm" borderColor="black">
            <InputField
              placeholder="Account type"
              type="text"
              value={formData.accountType}
              onChangeText={(value: string) => {
                handleInputChange("accountType", value);
              }}
              returnKeyType="next"
            />
          </Input>
        </FormControl>
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText size="sm">
              Relationship Number
            </FormControlLabelText>
          </FormControlLabel>
          <Input size="sm" borderColor="black">
            <InputField
              placeholder="Relationship number"
              type="text"
              value={formData.relationshipNumber}
              onChangeText={(value: string) => {
                handleInputChange("relationshipNumber", value);
              }}
              returnKeyType="next"
            />
          </Input>
        </FormControl>
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText size="sm">Currency</FormControlLabelText>
          </FormControlLabel>
          <Input size="sm" borderColor="black">
            <InputField
              placeholder="Currency"
              type="text"
              value={formData.currency}
              onChangeText={(value: string) => {
                handleInputChange("currency", value);
              }}
              returnKeyType="next"
            />
          </Input>
        </FormControl>
      </VStack>
      <VStack space="md">
        <Button onPress={handleSubmit}>
          <ButtonText>Add Bank Account</ButtonText>
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
