import React, { useMemo } from 'react';
import { func, object } from 'prop-types';

// Import components
import { FormTemplate } from 'components';

// Import utilities
import { createValidationSchema } from 'utilities';

// Import fields
import {
  ADDRESS_FIELDS,
  INITIAL_STATE,
  SELECT_VALUES,
} from './form/input_fields';

function Address({ send, initialData }) {
  const selectResources = { country: SELECT_VALUES };

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

  return (
    <FormTemplate
      initialValues={initialData || INITIAL_STATE}
      validationSchema={validationSchema}
      fields={ADDRESS_FIELDS}
      selectResources={selectResources}
      onSubmit={handleSubmit}
      hideCancelButton={true}
      submitButtonText="Save and go to shipping"
      skipButtonText="Save and skip shippment"
      skip={handleSkipShipping}
    />
  );
}

Address.propTypes = {
  send: func.isRequired,
  initialData: object,
};

export default Address;
