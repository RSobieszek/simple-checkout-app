import React from 'react';

// Import components
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import {
  Cart,
  Address,
  Shipping,
  Payment,
  Confirmation,
  ViewTitle,
} from 'components';

// Import context
import { CheckoutMachineProvider, CheckoutMachineContext } from 'state/context';

// Import xState
import { inspect } from '@xstate/inspect';

inspect({ iframe: false, url: 'https://statecharts.io/inspect' });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CheckoutMachineProvider>
        <CheckoutMachineContext.Consumer>
          {({
            showCart,
            showAdress,
            showShipping,
            showPayment,
            showConfirmation,
          }) => (
            <Box textAlign="center" fontSize="xl">
              <ViewTitle />
              {showCart && <Cart />}

              {showAdress && <Address />}

              {showShipping && <Shipping />}

              {showPayment && <Payment />}

              {showConfirmation && <Confirmation />}
            </Box>
          )}
        </CheckoutMachineContext.Consumer>
      </CheckoutMachineProvider>
    </ChakraProvider>
  );
}

export default App;
