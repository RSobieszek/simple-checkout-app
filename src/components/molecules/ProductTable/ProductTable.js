import React from 'react';

// Import components
import {
  Box,
  Container,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import TableRow from './TableRow';

function ProductTable({ productList, handleDelete }) {
  if (!productList.length) {
    return (
      <Container py="18">
        <Box
          border="1px"
          borderColor="gray.100"
          bg="gray.50"
          borderRadius="lg"
          p="18"
        >
          <Text>Empty cart</Text>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Product name</Th>
            <Th>Product price</Th>
            <Th>Shipping required</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {productList.map((product) => (
            <TableRow
              key={product.product_name}
              product={product}
              handleDelete={handleDelete}
            />
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}

export default ProductTable;
