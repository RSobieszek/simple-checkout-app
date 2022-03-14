import { useMemo } from 'react';

// Import context
import { useCheckoutMachineContext } from 'state/context';

// Import utilities
import { createValidationSchema, handleSkip } from 'utilities';

// Import fields
import {
  ADDRESS_FIELDS,
  INITIAL_STATE,
  SELECT_VALUES,
} from './form/input_fields';

export const useAddress = () => {
  const { send, stateContext, isShippingRequired } =
    useCheckoutMachineContext();

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

  return {
    initialData,
    selectResources,
    validationSchema,
    handleSubmit,
    handleSkipShipping: handleSkip,
    isShippingRequired,
  };
};

export default useAddress;
