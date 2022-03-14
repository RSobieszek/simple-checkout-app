import React from 'react';

// Import xState
import { useMachine } from '@xstate/react';
import asyncButtonMachine from './machine/asyncButtonMachine';

// Import components
import { Button } from '@chakra-ui/react';

function AsyncButton({ payload, children }) {
  // Normally I'd use react query or Redux but let's practice some FSMs!
  const [state, send] = useMachine(asyncButtonMachine);

  const colorScheme = {
    success: 'green',
    error: 'red',
  };

  return (
    <Button
      colorScheme={colorScheme[state.value]}
      isLoading={state.value === 'loading'}
      loadingText={'Submitting'}
      onClick={() => send({ type: 'SET_LOADING', payload })}
    >
      {children}
    </Button>
  );
}

export default AsyncButton;
