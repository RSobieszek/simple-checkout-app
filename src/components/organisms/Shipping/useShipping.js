// Import context
import { useCheckoutMachineContext } from 'state/context';

// Import fields
import { SELECT_VALUES } from './form/input_fields';
import { POLAND } from 'components/organisms/Address/form/input_fields';

// Import utilities
import { handleSkip } from 'utilities';

// Import helpers
import { TRANSITIONS } from './helpers';

const useShipping = () => {
  const { send, currentStateValue, isShippingRequired, stateContext } =
    useCheckoutMachineContext();

  const transitions = currentStateValue.match('shipping_selected')
    ? TRANSITIONS.filter(({ skip }) => !skip)
    : TRANSITIONS;

  const prepareSelectResources = () => {
    const selectValues =
      stateContext.address.country === POLAND
        ? [SELECT_VALUES[0]]
        : SELECT_VALUES;
    return { shipping_method: selectValues };
  };

  const selectResources = prepareSelectResources();

  const handleSubmit = (values) => {
    const transitionType = values.skipped ? 'SKIP_PAYMENT' : 'SELECT_PAYMENT';

    delete values.skipped;

    const { shipping_method } = values;
    send({ type: transitionType, value: shipping_method });
  };

  const skipMode = currentStateValue.match('shipping_skipped');

  return {
    send,
    selectResources,
    handleSubmit,
    handleSkipPayment: handleSkip,
    skipMode,
    isShippingRequired,
    transitions,
  };
};

export default useShipping;
