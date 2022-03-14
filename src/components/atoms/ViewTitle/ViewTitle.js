import React from 'react';

// Import helpers
import { VIEW_NAMES } from 'helpers';

// Import context
import { useCheckoutMachineContext } from 'state/context';

// Import components
import { Heading } from '@chakra-ui/react';

function ViewTitle() {
  const { currentStateValue } = useCheckoutMachineContext();
  return <Heading m="15px">{`${VIEW_NAMES[currentStateValue]} :`}</Heading>;
}

export default ViewTitle;
