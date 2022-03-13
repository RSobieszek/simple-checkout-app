import React from 'react';
import { func } from 'prop-types';

// Import components
import { FormTemplate } from 'components';

// Import fields
import {
  PAYMENT_FIELDS,
  INITIAL_STATE,
  SELECT_VALUES,
} from './form/input_fields';

function Payment({ send }) {
  const selectResources = { payment_method: SELECT_VALUES };

  const handleSubmit = ({ payment_method }) => {
    send({ type: 'COMPLETE', value: payment_method });
  };

  return (
    <FormTemplate
      initialValues={INITIAL_STATE}
      fields={PAYMENT_FIELDS}
      selectResources={selectResources}
      onSubmit={handleSubmit}
      hideCancelButton={true}
      submitButtonText="Save and go to confirmation"
    />
  );
}

Payment.propTypes = {
  send: func.isRequired,
};

export default Payment;
