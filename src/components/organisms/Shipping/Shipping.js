import React from 'react';
import { func } from 'prop-types';

// Import components
import { Button } from '@chakra-ui/react';
import { FormTemplate } from 'components';

// Import fields
import {
  SHIPPING_FIELDS,
  INITIAL_STATE,
  SELECT_VALUES,
} from './form/input_fields';
import { POLAND } from 'components/organisms/Address/form/input_fields';

function Shipping({ send, address }) {
  const prepareSelectResources = (address) => {
    const selectValues =
      address.country === POLAND ? [SELECT_VALUES[0]] : SELECT_VALUES;
    return { shipping_method: selectValues };
  };

  const handleSubmit = ({ shipping_method }) => {
    console.log('submitt');
    send({ type: 'SELECT_PAYMENT', value: shipping_method });
  };

  return (
    <>
      <FormTemplate
        initialValues={INITIAL_STATE}
        fields={SHIPPING_FIELDS}
        selectResources={prepareSelectResources(address)}
        onSubmit={handleSubmit}
        hideCancelButton={true}
        submitButtonText="Save and go to payments"
      />
      <Button onClick={() => send('SELECT_SHIPPING')}>Select shipping</Button>
      <Button onClick={() => send('SKIP_SHIPPING')}>Skip shipping</Button>
    </>
  );
}

Shipping.propTypes = {
  send: func.isRequired,
};

export default Shipping;
