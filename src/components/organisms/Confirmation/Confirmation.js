import React from 'react';
import { object } from 'prop-types';
import checkoutAPI from 'services';

// Import components
import { ProductTable, Card } from 'components';
import { Text, VStack, Button } from '@chakra-ui/react';

function Confirmation({ context }) {
  const {
    cart: productList,
    address: { city, street, country },
    shipping_method,
    payment_method,
  } = context;

  const handleConfirm = async () => {
    await checkoutAPI.post('', context);
  };

  return (
    <VStack gap="10px">
      <ProductTable productList={productList} showAction={false} />
      <Card headingText="Address:">
        <Text>Street: {street}</Text>
        <Text>City: {city}</Text>
        <Text>Country: {country}</Text>
      </Card>
      <Card headingText="Shipping method:">
        <Text>{shipping_method}</Text>
      </Card>
      <Card headingText="Payment method:">
        <Text>{payment_method}</Text>
      </Card>
      <Button onClick={handleConfirm}>Confirm</Button>
    </VStack>
  );
}

Confirmation.propTypes = {
  context: object.isRequired,
};

export default Confirmation;
