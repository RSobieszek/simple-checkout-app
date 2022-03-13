import React from 'react';

// Import components
import { Badge, Button, Td, Tr } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

function TableRow({ product, handleDelete }) {
  const { product_name, product_price, shipping_required, product_id } =
    product;
  return (
    <Tr>
      <Td>{product_name}</Td>
      <Td>{product_price}</Td>
      <Td>
        {shipping_required && (
          <Badge colorScheme="pink" variant="solid">
            Requires shipping!
          </Badge>
        )}
      </Td>
      <Td>
        <Button colorScheme="red" onClick={() => handleDelete(product_id)}>
          <DeleteIcon />
        </Button>
      </Td>
    </Tr>
  );
}

export default TableRow;
