import React from 'react';

// Import components
import { HStack, Button } from '@chakra-ui/react';

// there is probably a better way to do it with xState machine values
const ADDRESS_CONNECTIONS = {
  shipping_selected: 'SELECT_SHIPPING',
  shipping_skipped: 'SKIP_SHIPPING',
  payment_selected: 'SELECT_PAYMENT',
  payment_skipped: 'SKIP_PAYMENT',
  addressed: 'ADDRESS',
};

function Steps({ state, send }) {
  const showSteps = Object.keys(ADDRESS_CONNECTIONS).some(state.matches);
  const isAddress = state.value.match('addressed');

  if (!showSteps || isAddress) return null;

  const prevState = state.history?.value;

  const handleGoBack = () => {
    send(`${ADDRESS_CONNECTIONS[prevState]}`);
  };

  const handleGoAddress = () => {
    send('ADDRESS');
  };
  return (
    <HStack>
      <Button onClick={handleGoBack}>Go back</Button>
      <Button onClick={handleGoAddress}>Go to address</Button>
    </HStack>
  );
}

export default Steps;
