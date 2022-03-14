import React from 'react';

import { Button, HStack } from '@chakra-ui/react';

function TransitionButtons({ transitions, send }) {
  return (
    <HStack>
      {Object.keys(transitions).map((transition) => (
        <Button onClick={() => send(transition)}>
          {transitions[transition]}
        </Button>
      ))}
    </HStack>
  );
}

export default TransitionButtons;
