import React from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Textarea,
  TextareaInput,
  VStack,
} from "@gluestack-ui/themed";
export default function HelpSupportForm() {
  return (
    <VStack space="md" style={styles.container}>
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Full Name</FormControlLabelText>
        </FormControlLabel>
        <Input borderColor="black">
          <InputField placeholder="Username" type="text" returnKeyType="next" />
        </Input>
      </FormControl>
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Message</FormControlLabelText>
        </FormControlLabel>
        <Textarea borderColor="black">
          <TextareaInput
            placeholder="message"
            type="text"
            returnKeyType="done"
          />
        </Textarea>
      </FormControl>
      <Button>
        <ButtonText>Send Message</ButtonText>
      </Button>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 16,
  },
});
