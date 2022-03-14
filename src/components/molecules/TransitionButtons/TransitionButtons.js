import React from 'react';

import { Button, Container, HStack, Text, VStack } from '@chakra-ui/react';

function TransitionButtons({ transitions, send, skipTitle = '' }) {
  return (
    <Container>
      <VStack gap="15px">
        <Text>{skipTitle}</Text>
        <HStack>
          {transitions.map(({ name, text }) => (
            <Button key={name} onClick={() => send(name)}>
              {text}
            </Button>
          ))}
        </HStack>
      </VStack>
    </Container>
  );
}

export default TransitionButtons;
