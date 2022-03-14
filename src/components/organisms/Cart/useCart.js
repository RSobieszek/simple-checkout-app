import { useMemo, useReducer } from 'react';

// Import context
import { useCheckoutMachineContext } from 'state/context';

// Import utilities
import { createValidationSchema, useToggle } from 'utilities';
import { v4 as uuidv4 } from 'uuid';

// Import reducer
import {
  productsReducer,
  initialState,
  addProduct,
  removeProduct,
} from './reducer/productsReducer';

// Import fields
import { PRODUCT_FIELDS } from './form/input_fields';

const useCart = () => {
  // MACHINE
  const { send } = useCheckoutMachineContext();

  // LIST STATE
  const [productList, dispatch] = useReducer(productsReducer, initialState);

  // MODAL
  const [isOpen, toggle] = useToggle();

  // FORM
  const validationSchema = useMemo(
    () => createValidationSchema(PRODUCT_FIELDS),
    []
  );

  const handleSubmit = (values, { resetForm }) => {
    const resources = {
      ...values,
      //probably big overkill
      product_id: uuidv4(),
    };
    addProduct(resources)(dispatch);
    resetForm();
    toggle();
  };

  const handleCancel = () => {
    toggle();
  };

  // TABLE
  const handleDelete = (id) => {
    removeProduct(id)(dispatch);
  };

  // CART
  const handleConfirmCart = () => send({ type: 'ADDRESS', value: productList });

  return {
    productList,
    validationSchema,
    submit: handleSubmit,
    isOpen,
    toggle,
    handleDelete,
    handleCancel,
    handleConfirmCart,
  };
};

export default useCart;
