import { createMachine, assign } from 'xstate';

const checkoutStateMachine = createMachine({
  id: 'checkoutStateMachine',
  initial: 'cart',
  context: {
    cart: {},
    address: null,
    shipping_method: null,
    payment_method: null,
  },
  states: {
    cart: {
      on: {
        ADDRESS: {
          target: 'addressed',
          actions: assign({ cart: (_, event) => event.value }),
        },
      },
    },
    addressed: {
      on: {
        SELECT_SHIPPING: {
          target: 'shipping_selected',
          actions: assign({ address: (_, event) => event.value }),
        },
        SKIP_SHIPPING: 'shipping_skipped',
      },
    },
    shipping_selected: {
      on: {
        SELECT_PAYMENT: {
          target: 'payment_selected',
          actions: assign({ shipping_method: (_, event) => event.value }),
        },
        SKIP_PAYMENT: 'payment_skipped',
        ADDRESS: 'addressed',
      },
    },
    shipping_skipped: {
      on: {
        SELECT_PAYMENT: 'payment_selected',
        SKIP_PAYMENT: 'payment_skipped',
        ADDRESS: 'addressed',
      },
    },
    payment_selected: {
      on: {
        ADDRESS: 'addressed',
        COMPLETE: {
          target: 'completed',
          actions: assign({ payment_method: (_, event) => event.value }),
        },
        SELECT_SHIPPING: 'shipping_selected',
        SKIP_SHIPPING: 'shipping_skipped',
      },
    },
    payment_skipped: {
      on: {
        ADDRESS: 'addressed',
        COMPLETE: 'completed',
        SELECT_SHIPPING: 'shipping_selected',
        SKIP_SHIPPING: 'shipping_skipped',
      },
    },
    completed: {},
  },
});

export default checkoutStateMachine;
