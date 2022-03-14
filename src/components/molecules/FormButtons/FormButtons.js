import React from 'react';
import { useFormikContext } from 'formik';

// Import components
import { Button, HStack } from '@chakra-ui/react';

function FormButtons({
  cancel,
  skip,
  hideCancelButton = false,
  hideSubmitButton = false,
  hideSkipButton = false,
  submitButtonText = 'Submit',
  skipButtonText = '',
}) {
  const form = useFormikContext();

  const showSkipButton = !hideSkipButton && skipButtonText;

  return (
    <HStack justify={'end'}>
      {!hideCancelButton && <Button onClick={cancel}>Cancel</Button>}
      {showSkipButton && (
        <Button variant="outline" onClick={() => skip({ form })}>
          {skipButtonText}
        </Button>
      )}
      {!hideSubmitButton && <Button type="submit">{submitButtonText}</Button>}
    </HStack>
  );
}

export default FormButtons;
