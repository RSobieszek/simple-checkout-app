import React from 'react';

// Import components
import {
  ChakraProvider,
  Box,
  Text,
  // Link,
  // VStack,
  // Code,
  // Grid,
  theme,
  extendTheme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Cart, Address } from 'components';

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
        <Text>CONTEXT{JSON.stringify(state.context)}</Text>
        <Box>{state.value.match('cart') && <Cart send={send} />}</Box>
        <Box>{state.value.match('addressed') && <Address send={send} />}</Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
