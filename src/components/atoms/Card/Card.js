import React from 'react';
import { oneOfType, arrayOf, node, string } from 'prop-types';

// Import components
import { Box, Container, Heading, VStack } from '@chakra-ui/react';

function Card({ headingText, children }) {
  return (
    <Container>
      <Box
        borderWidth="1px"
        borderColor="gray.100"
        borderRadius="lg"
        bg="gray.50"
      >
        <VStack>
          <Heading size="md">{headingText}</Heading>
          {children}
        </VStack>
      </Box>
    </Container>
  );
}

Card.propTypes = {
  headingText: string,
  children: oneOfType([arrayOf(node), node]),
};

export default Card;
