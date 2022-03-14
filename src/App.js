import React from 'react';

// Import components
import { ChakraProvider, Box, Text, theme, Code } from '@chakra-ui/react';
import { Cart, Address, Shipping, Payment, Confirmation } from 'components';

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
            state, //delete after refactor
            send, //delete after refactor
            currentStateValue, //delete after refactor
            stateContext, //delete after refactor
            showCart,
            showAdress,
            showShipping,
            showPayment,
            showConfirmation,
          }) => (
            <Box textAlign="center" fontSize="xl">
              {/* <Steps state={state} send={send} /> */}
              <Text>STATE{currentStateValue}</Text>
              <Code>CONTEXT{JSON.stringify(stateContext, null, 2)}</Code>

              {showCart && <Cart />}

              {showAdress && (
                <Address send={send} initialData={stateContext.address} />
              )}

              {showShipping && (
                <Shipping
                  send={send}
                  initialData={stateContext.shipping_method}
                  address={stateContext.address}
                  currentState={currentStateValue}
                />
              )}

              {showPayment && (
                <Payment
                  send={send}
                  initialData={stateContext.payment_method}
                  address={stateContext.address}
                  currentState={currentStateValue}
                />
              )}

              {showConfirmation && <Confirmation context={stateContext} />}
            </Box>
          )}
        </CheckoutMachineContext.Consumer>
      </CheckoutMachineProvider>
    </ChakraProvider>
  );
}

export default App;
