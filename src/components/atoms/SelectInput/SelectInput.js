import React from 'react';

// Import components
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Divider,
  Select,
} from '@chakra-ui/react';

function SelectInput({ field, form, label, placeholder, children }) {
  const fieldErrorMessage = form.errors[field.name];

  return (
    <FormControl isInvalid={!!fieldErrorMessage}>
      <FormLabel>{label}</FormLabel>
      <Select {...field} placeholder={placeholder}>
        {children}
      </Select>
      <FormErrorMessage>{fieldErrorMessage}</FormErrorMessage>
      <Divider mt={30} mb={15} />
    </FormControl>
  );
}

export default SelectInput;
