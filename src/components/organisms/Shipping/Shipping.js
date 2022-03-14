import React from 'react';
import { func, object } from 'prop-types';

// Import components
import { FormTemplate, TransitionButtons } from 'components';

// Import fields
import {
  SHIPPING_FIELDS,
  INITIAL_STATE,
  SELECT_VALUES,
} from './form/input_fields';
import { POLAND } from 'components/organisms/Address/form/input_fields';
import { Box } from '@chakra-ui/react';

const TRANSITIONS = {
  SELECT_PAYMENT: 'Select payment',
  SKIP_PAYMENT: 'Skip payment',
  ADDRESS: 'Update address',
};

function Shipping({ send, address, currentState }) {
  if (currentState.match('shipping_skipped')) {
    return (
      <>
        <Box>ship later</Box>
        <TransitionButtons transitions={TRANSITIONS} send={send} />
      </>
    );
  }

  const prepareSelectResources = (address) => {
    const selectValues =
      address.country === POLAND ? [SELECT_VALUES[0]] : SELECT_VALUES;
    return { shipping_method: selectValues };
  };

  const handleSubmit = (values) => {
    const transitionType = values.skipped ? 'SKIP_PAYMENT' : 'SELECT_PAYMENT';

    delete values.skipped;

    const { shipping_method } = values;
    send({ type: transitionType, value: shipping_method });
  };

  const handleSkipPayment = ({ form }) => {
    // dirty hack but it's getting late
    // basically I want to set proper xState transition based on
    // which button is pressed, but still have proper form submission flow
    form.setFieldValue('skipped', true, false);
    form.handleSubmit();
  };

  return (
    <>
      <TransitionButtons transitions={TRANSITIONS} send={send} />
      <FormTemplate
        initialValues={INITIAL_STATE}
        fields={SHIPPING_FIELDS}
        selectResources={prepareSelectResources(address)}
        onSubmit={handleSubmit}
        hideCancelButton={true}
        submitButtonText="Save and go to payments"
        skipButtonText="Save and pay later"
        skip={handleSkipPayment}
      />
    </>
  );
}

Shipping.propTypes = {
  send: func.isRequired,
  address: object.isRequired,
};

export default Shipping;
