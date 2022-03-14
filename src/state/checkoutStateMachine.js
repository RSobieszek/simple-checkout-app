import { createMachine, assign } from 'xstate';

const checkoutStateMachine = createMachine(
  {
    id: 'checkoutStateMachine',
    initial: 'cart',
    context: {
      cart: [],
      isShippingRequired: false,
      address: null,
      shipping_method: null,
      payment_method: null,
    },
    states: {
      cart: {
        on: {
          ADDRESS: {
            target: 'addressed',
            actions: 'setCart',
          },
        },
      },
      addressed: {
        entry: 'setShippingRequired',
        on: {
          SELECT_SHIPPING: {
            target: 'shipping_selected',
            actions: 'setAddress',
          },
          SKIP_SHIPPING: {
            target: 'shipping_skipped',
            actions: 'setAddress',
          },
        },
      },
      shipping_selected: {
        on: {
          SELECT_PAYMENT: {
            target: 'payment_selected',
            actions: 'setShippingMethod',
          },
          SKIP_PAYMENT: {
            target: 'payment_skipped',
            actions: 'setShippingMethod',
          },
          ADDRESS: 'addressed',
        },
      },
      shipping_skipped: {
        entry: 'resetShipping',
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
            actions: 'setPaymentMethod',
          },
          SELECT_SHIPPING: 'shipping_selected',
          SKIP_SHIPPING: 'shipping_skipped',
        },
      },
      payment_skipped: {
        entry: 'resetPayment',
        on: {
          ADDRESS: 'addressed',
          COMPLETE: 'completed',
          SELECT_SHIPPING: 'shipping_selected',
          SKIP_SHIPPING: 'shipping_skipped',
        },
      },
      completed: {},
    },
  },
  {
    actions: {
      setCart: assign({ cart: (_, event) => event.value }),
      setAddress: assign({ address: (_, event) => event.value }),
      setShippingRequired: assign(({ cart }) => {
        const productsWithShipping = cart.filter(
          ({ shipping_required }) => shipping_required
        );
        const isShippingRequired = !!productsWithShipping.length;

        return {
          isShippingRequired,
        };
      }),
      setShippingMethod: assign({ shipping_method: (_, event) => event.value }),
      setPaymentMethod: assign({ payment_method: (_, event) => event.value }),
      resetShipping: assign({ shipping_method: null }),
      resetPayment: assign({ payment_method: null }),
    },
  }
);

export default checkoutStateMachine;
