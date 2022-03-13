import React from 'react';
import { useFormikContext } from 'formik';

// Import components
import { Button, HStack } from '@chakra-ui/react';

function FormButtons({
  cancel,
  skip,
  hideCancelButton = false,
  submitButtonText = 'Submit',
  skipButtonText,
}) {
  const form = useFormikContext();

  return (
    <HStack justify={'end'}>
      {!hideCancelButton && <Button onClick={cancel}>Cancel</Button>}
      {skipButtonText && (
        <Button variant="outline" onClick={() => skip({ form })}>
          {skipButtonText}
        </Button>
      )}
      <Button type="submit">{submitButtonText}</Button>
    </HStack>
  );
}

export default FormButtons;
