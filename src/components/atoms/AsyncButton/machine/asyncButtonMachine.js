import { createMachine, assign } from 'xstate';
import checkoutAPI from 'services';

const postData = async (payload) => await checkoutAPI.post('', payload);

const asyncButtonMachine = createMachine({
  id: 'asyncButtonMachine',
  initial: 'idle',
  context: {
    payload: {},
  },
  states: {
    idle: {
      on: {
        SET_LOADING: {
          target: 'loading',
          actions: assign({ payload: (_, event) => event.payload }),
        },
      },
    },
    loading: {
      invoke: {
        id: 'getUser',
        src: (_, context) => postData(context.payload),
        onDone: {
          target: 'success',
        },
        onError: {
          target: 'error',
        },
      },
    },
    error: {
      on: {
        SET_LOADING: 'loading',
      },
    },
    success: {},
  },
});

export default asyncButtonMachine;
