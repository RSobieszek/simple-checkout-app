import { useContext } from 'react';

// Import context
import { CheckoutMachineContext } from 'state/context';

const useCheckoutMachineContext = () => {
  const context = useContext(CheckoutMachineContext);
  return context;
};

export default useCheckoutMachineContext;
