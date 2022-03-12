import React from 'react';

// Import components
import {
  FormControl,
  FormLabel,
  NumberInput,
  FormErrorMessage,
  Divider,
  NumberInputField,
  Checkbox,
  HStack,
} from '@chakra-ui/react';

function CheckboxInput({ field, form, label, placeholder }) {
  const fieldErrorMessage = form.errors[field.name];

  return (
    <FormControl isInvalid={!!fieldErrorMessage}>
      <FormLabel>{label}</FormLabel>
      <HStack>
        <Checkbox {...field} />
      </HStack>
      <Divider mt={30} mb={15} />
    </FormControl>
  );
}

export default CheckboxInput;
