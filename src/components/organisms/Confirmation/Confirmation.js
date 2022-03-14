import React from 'react';

// Import components
import { ProductTable, Card, AsyncButton } from 'components';
import { Text, VStack } from '@chakra-ui/react';

// Import context
import { useCheckoutMachineContext } from 'state/context';

function Confirmation() {
  const { stateContext } = useCheckoutMachineContext();
  const {
    cart: productList,
    address: { city, street, country },
    shipping_method,
    payment_method,
  } = stateContext;

  return (
    <VStack gap="10px">
      <ProductTable productList={productList} showAction={false} />
      <Card headingText="Address:">
        <Text>Street: {street}</Text>
        <Text>City: {city}</Text>
        <Text>Country: {country}</Text>
      </Card>
      <Card headingText="Shipping method:">
        <Text>{shipping_method ?? 'Shipping skipped'}</Text>
      </Card>
      <Card headingText="Payment method:">
        <Text>{payment_method ?? 'Pay later (payment skipped)'}</Text>
      </Card>
      <AsyncButton payload={stateContext}>Confirm</AsyncButton>
    </VStack>
  );
}

export default Confirmation;
