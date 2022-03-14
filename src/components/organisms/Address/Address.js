import React from 'react';
import useAddress from './useAddress';

// Import components
import { FormTemplate } from 'components';

// Import fields
import { ADDRESS_FIELDS } from './form/input_fields';

function Address() {
  const {
    initialData,
    selectResources,
    validationSchema,
    handleSubmit,
    handleSkipShipping,
  } = useAddress();

  return (
    <FormTemplate
      initialValues={initialData}
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

export default Address;
