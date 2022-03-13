import React from 'react';

// Import components
import {
  Container,
  Heading,
  Modal,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';

function FormModal({ isOpen, onClose, headingText, children }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent>
          <Container p={30}>
            <Heading mb={10}>{headingText}</Heading>
            {children}
          </Container>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}

export default FormModal;
