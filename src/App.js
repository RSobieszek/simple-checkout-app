import React from 'react';

// Import components
import { ChakraProvider, Box, Text, theme } from '@chakra-ui/react';
import { Cart, Address, Shipping, Payment } from 'components';

// Import xState
import { useMachine } from '@xstate/react';
import { inspect } from '@xstate/inspect';
import checkoutStateMachine from './state/checkoutStateMachine';

inspect({ iframe: false, url: 'https://statecharts.io/inspect' });

function App() {
  const [state, send] = useMachine(checkoutStateMachine, { devTools: true });

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Text>STATE{state.value}</Text>
        <Text>CONTEXT{JSON.stringify(state.context, null, 2)}</Text>

        {state.value.match('cart') && <Cart send={send} />}

        {state.value.match('addressed') && (
          <Address send={send} initialData={state.context.address} />
        )}

        {state.value.match('shipping_selected') && (
          <Shipping
            send={send}
            initialData={state.context.shipping_method}
            address={state.context.address}
          />
        )}

        {state.value.match('payment_selected') && (
          <Payment
            send={send}
            initialData={state.context.shipping_method}
            address={state.context.address}
          />
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
