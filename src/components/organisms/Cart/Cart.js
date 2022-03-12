import React, { useMemo } from 'react';
import { func } from 'prop-types';

import * as yup from 'yup';

// Import components
import { Button } from '@chakra-ui/react';
import { FormTemplate } from 'components';

// Import utilities
import { createValidationSchema } from 'utilities';

// Import fields
import { PRODUCT_FIELDS, INITIAL_STATE } from './form/input_fields';

function Cart({ send }) {
  const validationSchema = useMemo(
    () => createValidationSchema(PRODUCT_FIELDS),
    []
  );

  const handleSubmit = values => {
    console.log('submit');
    console.log(values);
  };

  return (
    <>
      <div>Cart</div>
      <FormTemplate
        initialValues={INITIAL_STATE}
        validationSchema={validationSchema}
        fields={PRODUCT_FIELDS}
        onSubmit={handleSubmit}
      />
      <Button onClick={() => send('ADDRESS')}>Shipping Address</Button>
    </>
  );
}

Cart.propTypes = {
  send: func.isRequired,
};

export default Cart;

// initialValues,
// validationSchema,
// onSubmit,
// fields = [],
// selectResources,
