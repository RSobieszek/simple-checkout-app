import React from 'react';

// Import components
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Divider,
} from '@chakra-ui/react';

function TextInput({ field, form, label, placeholder }) {
  const fieldErrorMessage = form.errors[field.name];

  return (
    <FormControl isInvalid={!!fieldErrorMessage}>
      <FormLabel>{label}</FormLabel>
      <Input {...field} placeholder={placeholder} />
      <FormErrorMessage>{fieldErrorMessage}</FormErrorMessage>
      <Divider mt={30} mb={15} />
    </FormControl>
  );
}

export default TextInput;
