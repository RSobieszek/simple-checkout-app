import React from 'react';

import { Button, Container, HStack } from '@chakra-ui/react';

function TransitionButtons({ transitions, send }) {
  return (
    <Container>
      <HStack>
        {Object.keys(transitions).map((transition) => (
          <Button key={transition} onClick={() => send(transition)}>
            {transitions[transition]}
          </Button>
        ))}
      </HStack>
    </Container>
  );
}

export default TransitionButtons;
