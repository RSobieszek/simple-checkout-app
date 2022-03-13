import React from 'react';

// Import components
import { Button, HStack } from '@chakra-ui/react';

function FormButtons({ cancel, hideCancelButton = false }) {
  return (
    <HStack justify={'end'}>
      {!hideCancelButton && <Button onClick={cancel}>Cancel</Button>}
      <Button type="submit">Submit</Button>
    </HStack>
  );
}

export default FormButtons;
