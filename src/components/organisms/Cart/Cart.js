import React from 'react';
import { func } from 'prop-types';

// Import components
import { Button, Container, Flex, Text } from '@chakra-ui/react';
import { FormTemplate, FormModal, ProductTable } from 'components';

// Import fields
import { PRODUCT_FIELDS, INITIAL_STATE } from './form/input_fields';

// Import logic
import useCart from './useCart';

function Cart({ send }) {
  const {
    productList,
    validationSchema,
    submit: handleSubmit,
    isOpen,
    toggle,
    handleDelete,
    handleCancel,
  } = useCart();

  return (
    <>
      <Container>
        <Flex justify={'space-between'}>
          <Text>CART</Text>
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
      <Button
        isDisabled={!productList.length}
        onClick={() => send({ type: 'ADDRESS', value: productList })}
      >
        Confirm cart
      </Button>
    </>
  );
}

Cart.propTypes = {
  send: func.isRequired,
};

export default Cart;
