import React from 'react';

// Import components
import { Button, HStack } from '@chakra-ui/react';

function FormButtons({
  cancel,
  hideCancelButton = false,
  submitButtonText = 'Submit',
}) {
  return (
    <HStack justify={'end'}>
      {!hideCancelButton && <Button onClick={cancel}>Cancel</Button>}
      <Button type="submit">{submitButtonText}</Button>
    </HStack>
  );
}

export default FormButtons;
