import React from 'react';

// Import components
import { ChakraProvider, Box, Text, theme, Code } from '@chakra-ui/react';
import {
  Cart,
  Address,
  Shipping,
  Payment,
  Confirmation,
  Steps,
} from 'components';

// Import xState
import { useMachine } from '@xstate/react';
import { inspect } from '@xstate/inspect';
import checkoutStateMachine from './state/checkoutStateMachine';

inspect({ iframe: false, url: 'https://statecharts.io/inspect' });

function App() {
  // good idea would be to put machine inside
  const [state, send] = useMachine(checkoutStateMachine, { devTools: true });

  const showShipping = ['shipping_selected', 'shipping_skipped'].some(
    state.matches
  );
  const showPayment = ['payment_selected', 'payment_skipped'].some(
    state.matches
  );

  const currentState = state.value;
  const stateContext = state.context;

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        {/* <Steps state={state} send={send} /> */}
        <Text>STATE{currentState}</Text>
        <Code>CONTEXT{JSON.stringify(stateContext, null, 2)}</Code>

        {currentState.match('cart') && <Cart send={send} />}

        {currentState.match('addressed') && (
          <Address send={send} initialData={stateContext.address} />
        )}

        {showShipping && (
          <Shipping
            send={send}
            initialData={stateContext.shipping_method}
            address={stateContext.address}
            currentState={currentState}
          />
        )}

        {showPayment && (
          <Payment
            send={send}
            initialData={stateContext.payment_method}
            address={stateContext.address}
            currentState={currentState}
          />
        )}

        {currentState.match('completed') && (
          <Confirmation context={stateContext} />
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
