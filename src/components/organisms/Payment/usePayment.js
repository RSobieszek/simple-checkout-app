// Import context
import { useCheckoutMachineContext } from 'state/context';

// Import fields
import { SELECT_VALUES } from './form/input_fields';

// Import helpers
import { TRANSITIONS } from './helpers';

const usePayment = () => {
  const { send, currentStateValue, isShippingRequired } =
    useCheckoutMachineContext();

  const selectResources = { payment_method: SELECT_VALUES };

  const handleSubmit = (values) => {
    send({ type: 'COMPLETE', value: values.payment_method });
  };

  const transitions = isShippingRequired
    ? TRANSITIONS.filter(({ skip }) => !skip)
    : TRANSITIONS;

  const skipTransitions = [
    ...TRANSITIONS,
    { name: 'COMPLETE', text: 'Go to confirmation' },
  ];

  const skipMode = currentStateValue.match('payment_skipped');

  return {
    send,
    skipMode,
    transitions,
    skipTransitions,
    selectResources,
    handleSubmit,
  };
};

export default usePayment;
