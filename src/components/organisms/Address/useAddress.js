import { useMemo } from 'react';

// Import context
import { useCheckoutMachineContext } from 'state/context';

// Import utilities
import { createValidationSchema } from 'utilities';

// Import fields
import {
  ADDRESS_FIELDS,
  INITIAL_STATE,
  SELECT_VALUES,
} from './form/input_fields';

export const useAddress = () => {
  const { send, stateContext } = useCheckoutMachineContext();

  const selectResources = { country: SELECT_VALUES };

  const initialData = stateContext.address || INITIAL_STATE;

  const validationSchema = useMemo(
    () => createValidationSchema(ADDRESS_FIELDS),
    []
  );

  const handleSubmit = (values) => {
    const transitionType = values.skipped ? 'SKIP_SHIPPING' : 'SELECT_SHIPPING';

    delete values.skipped;

    send({ type: transitionType, value: values });
  };

  const handleSkipShipping = ({ form }) => {
    // dirty hack but it's getting late
    // basically I want to set proper xState transition based on
    // which button is pressed, but still have proper form submission flow
    form.setFieldValue('skipped', true, false);
    form.handleSubmit();
  };

  return {
    initialData,
    selectResources,
    validationSchema,
    handleSubmit,
    handleSkipShipping,
  };
};

export default useAddress;
