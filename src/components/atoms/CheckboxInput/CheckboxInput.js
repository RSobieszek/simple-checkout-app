import React from 'react';

// Import components
import {
  FormControl,
  FormLabel,
  Divider,
  Checkbox,
  HStack,
} from '@chakra-ui/react';

function CheckboxInput({ field, form, label }) {
  const { name, value } = field;

  const fieldErrorMessage = form.errors[name];

  return (
    <FormControl isInvalid={!!fieldErrorMessage}>
      <FormLabel>{label}</FormLabel>
      <HStack>
        <Checkbox {...field} isChecked={value} />
      </HStack>
      <Divider mt={30} mb={15} />
    </FormControl>
  );
}

export default CheckboxInput;
