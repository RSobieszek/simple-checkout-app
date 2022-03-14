import React from 'react';

// Import xState
import { useMachine } from '@xstate/react';
import checkoutStateMachine from 'state/checkoutStateMachine';

// Create context
export const CheckoutMachineContext = React.createContext();

/**
 * Using context for this app might be a slight overkill as there are
 * not so many props to drill through component tree, but
 * it cleans up code nicely.
 */
function CheckoutMachineProvider({ children }) {
  const [state, send] = useMachine(checkoutStateMachine, { devTools: true });

  const currentStateValue = state.value;
  const stateContext = state.context;

  // Main components visibility contidions
  const showCart = currentStateValue.match('cart');
  const showAdress = currentStateValue.match('addressed');
  const showShipping = ['shipping_selected', 'shipping_skipped'].some(
    state.matches
  );
  const showPayment = ['payment_selected', 'payment_skipped'].some(
    state.matches
  );
  const showConfirmation = currentStateValue.match('completed');

  return (
    <CheckoutMachineContext.Provider
      value={{
        state,
        send,
        currentStateValue,
        stateContext,
        showCart,
        showAdress,
        showShipping,
        showPayment,
        showConfirmation,
      }}
    >
      {children}
    </CheckoutMachineContext.Provider>
  );
}

export default CheckoutMachineProvider;
