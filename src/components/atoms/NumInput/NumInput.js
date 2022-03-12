import React from 'react';

// Import components
import {
  FormControl,
  FormLabel,
  NumberInput,
  FormErrorMessage,
  Divider,
  NumberInputField,
} from '@chakra-ui/react';

function NumInput({ field, form, label, placeholder }) {
  const fieldErrorMessage = form.errors[field.name];

  return (
    <FormControl isInvalid={!!fieldErrorMessage}>
      <FormLabel>{label}</FormLabel>
      <NumberInput step={0}>
        <NumberInputField {...field} placeholder={placeholder} />
      </NumberInput>
      <FormErrorMessage>{fieldErrorMessage}</FormErrorMessage>
      <Divider mt={30} mb={15} />
    </FormControl>
  );
}

export default NumInput;
