import React from 'react';

// Import components
import { Button, Td, Tr } from '@chakra-ui/react';
import { DeleteIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';

function TableRow({ product, handleDelete, showAction }) {
  const { product_name, product_price, shipping_required, product_id } =
    product;
  return (
    <Tr>
      <Td>{product_name}</Td>
      <Td>{product_price}</Td>
      <Td>
        {shipping_required ? (
          <CheckIcon color="green.400" />
        ) : (
          <CloseIcon color="red.400" />
        )}
      </Td>
      {showAction && (
        <Td>
          <Button colorScheme="red" onClick={() => handleDelete(product_id)}>
            <DeleteIcon />
          </Button>
        </Td>
      )}
    </Tr>
  );
}

export default TableRow;
