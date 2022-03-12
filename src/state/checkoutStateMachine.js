import { createMachine } from 'xstate';

const checkoutStateMachine = createMachine({
  id: 'checkoutStateMachine',
  initial: 'cart',
  context: {
    cart: {},
    address: {},
    shipping_method: null,
    payment_method: null,
  },
  states: {
    cart: {
      on: {
        ADDRESS: 'addressed',
      },
    },
    addressed: {
      on: {
        SELECT_SHIPPING: 'shipping_selected',
        SKIP_SHIPPING: 'shipping_skipped',
      },
    },
    shipping_selected: {
      on: {
        SELECT_PAYMENT: 'payment_selected',
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
        COMPLETE: 'completed',
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
