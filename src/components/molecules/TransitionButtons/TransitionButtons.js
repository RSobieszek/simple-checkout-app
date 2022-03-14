import React from 'react';

import { Button, Container, HStack, Text, VStack } from '@chakra-ui/react';

function TransitionButtons({ transitions, send, skipTitle = '' }) {
  return (
    <Container>
      <VStack gap="15px">
        <Text>{skipTitle}</Text>
        <HStack>
          {Object.keys(transitions).map((transition) => (
            <Button key={transition} onClick={() => send(transition)}>
              {transitions[transition]}
            </Button>
          ))}
        </HStack>
      </VStack>
    </Container>
  );
}

export default TransitionButtons;
