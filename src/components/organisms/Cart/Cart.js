import React from 'react';

// Import components
import { Button, Container, Flex, VStack } from '@chakra-ui/react';
import { FormTemplate, FormModal, ProductTable } from 'components';

// Import fields
import { PRODUCT_FIELDS, INITIAL_STATE } from './form/input_fields';

// Import logic
import useCart from './useCart';

function Cart() {
  const {
    productList,
    validationSchema,
    submit: handleSubmit,
    isOpen,
    toggle,
    handleDelete,
    handleCancel,
    handleConfirmCart,
  } = useCart();

  return (
    <VStack gap="15px">
      <Container>
        <Flex justify={'end'}>
          <Button onClick={toggle}>ADD PRODUCT</Button>
        </Flex>
      </Container>
      <ProductTable productList={productList} handleDelete={handleDelete} />
      <FormModal isOpen={isOpen} onClose={toggle} headingText="Add product:">
        <FormTemplate
          initialValues={INITIAL_STATE}
          validationSchema={validationSchema}
          fields={PRODUCT_FIELDS}
          onSubmit={handleSubmit}
          cancel={handleCancel}
        />
      </FormModal>
      <Button isDisabled={!productList.length} onClick={handleConfirmCart}>
        Confirm cart
      </Button>
    </VStack>
  );
}

export default Cart;
