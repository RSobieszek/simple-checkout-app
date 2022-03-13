import React, { useMemo } from 'react';
import { func } from 'prop-types';

// Import components
import { Button } from '@chakra-ui/react';
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
    send({ type: 'SELECT_SHIPPING', value: values });
  };

  return (
    <>
      <FormTemplate
        initialValues={initialData || INITIAL_STATE}
        validationSchema={validationSchema}
        fields={ADDRESS_FIELDS}
        selectResources={selectResources}
        onSubmit={handleSubmit}
        hideCancelButton={true}
        submitButtonText="Save and go to shipping"
      />
      <Button onClick={() => send('SELECT_SHIPPING')}>Select shipping</Button>
      <Button onClick={() => send('SKIP_SHIPPING')}>Skip shipping</Button>
    </>
  );
}

Address.propTypes = {
  send: func.isRequired,
};

export default Address;
