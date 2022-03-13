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
  const [state, send] = useMachine(checkoutStateMachine, { devTools: true });

  const showShipping = ['shipping_selected', 'shipping_skipped'].some(
    state.matches
  );
  const showPayment = ['payment_selected', 'payment_skipped'].some(
    state.matches
  );

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Steps state={state} send={send} />
        <Text>STATE{state.value}</Text>
        <Code>CONTEXT{JSON.stringify(state.context, null, 2)}</Code>

        {state.value.match('cart') && <Cart send={send} />}

        {state.value.match('addressed') && (
          <Address send={send} initialData={state.context.address} />
        )}

        {showShipping && (
          <Shipping
            send={send}
            initialData={state.context.shipping_method}
            address={state.context.address}
          />
        )}

        {showPayment && (
          <Payment
            send={send}
            initialData={state.context.shipping_method}
            address={state.context.address}
          />
        )}

        {state.value.match('completed') && (
          <Confirmation context={state.context} />
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
