import React from 'react';
import { func } from 'prop-types';

// Import components
import { Button } from '@chakra-ui/react';

function Address({ send }) {
  return (
    <>
      <div>Address</div>
      <Button onClick={() => send('SELECT_SHIPPING')}>Select shipping</Button>
      <Button onClick={() => send('SKIP_SHIPPING')}>Skip shipping</Button>
    </>
  );
}

Address.propTypes = {
  send: func.isRequired,
};

export default Address;
