import React from 'react';
import { func } from 'prop-types';

// Import components
import { FormTemplate, TransitionButtons } from 'components';

// Import fields
import {
  PAYMENT_FIELDS,
  INITIAL_STATE,
  SELECT_VALUES,
} from './form/input_fields';
import { Box } from '@chakra-ui/react';

const TRANSITIONS = {
  SELECT_SHIPPING: 'Select shipping',
  SKIP_SHIPPING: 'Skip shipping',
  ADDRESS: 'Update address',
};

function Payment({ send, currentState }) {
  if (currentState.match('payment_skipped')) {
    const SKIP_TRANSITIONS = { ...TRANSITIONS, COMPLETE: 'Go to confirmation' };
    return (
      <>
        <Box>pay later</Box>
        <TransitionButtons transitions={SKIP_TRANSITIONS} send={send} />
      </>
    );
  }

  const selectResources = { payment_method: SELECT_VALUES };

  const handleSubmit = (values) => {
    send({ type: 'COMPLETE', value: values.payment_method });
  };

  return (
    <>
      <TransitionButtons transitions={TRANSITIONS} send={send} />
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

Payment.propTypes = {
  send: func.isRequired,
};

export default Payment;
