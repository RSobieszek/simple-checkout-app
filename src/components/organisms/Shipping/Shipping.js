import React from 'react';

// Import components
import { FormTemplate, TransitionButtons } from 'components';

// Import fields
import { SHIPPING_FIELDS, INITIAL_STATE } from './form/input_fields';

// Import logic
import useShipping from './useShipping';

function Shipping() {
  const {
    send,
    selectResources,
    handleSubmit,
    handleSkipPayment,
    skipMode,
    transitions,
  } = useShipping();

  if (skipMode) {
    return (
      <TransitionButtons
        transitions={transitions}
        send={send}
        skipTitle={'Shipping skipped'}
      />
    );
  }

  return (
    <>
      <TransitionButtons transitions={transitions} send={send} />
      <FormTemplate
        initialValues={INITIAL_STATE}
        fields={SHIPPING_FIELDS}
        selectResources={selectResources}
        onSubmit={handleSubmit}
        hideCancelButton={true}
        submitButtonText="Save and go to payments"
        skipButtonText="Save and pay later"
        skip={handleSkipPayment}
      />
    </>
  );
}

export default Shipping;
