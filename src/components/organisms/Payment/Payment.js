import React from 'react';

// Import components
import { FormTemplate, TransitionButtons } from 'components';

// Import fields
import { PAYMENT_FIELDS, INITIAL_STATE } from './form/input_fields';

// Import logic
import usePayment from './usePayment';

function Payment() {
  const {
    send,
    skipMode,
    transitions,
    skipTransitions,
    selectResources,
    handleSubmit,
  } = usePayment();

  if (skipMode) {
    return (
      <TransitionButtons
        transitions={skipTransitions}
        send={send}
        skipTitle={'Pay later (payment skipped)'}
      />
    );
  }

  return (
    <>
      <TransitionButtons transitions={transitions} send={send} />
      <FormTemplate
        initialValues={INITIAL_STATE}
        fields={PAYMENT_FIELDS}
        selectResources={selectResources}
        onSubmit={handleSubmit}
        hideCancelButton={true}
        submitButtonText="Save and go to confirmation"
      />
    </>
  );
}

export default Payment;
