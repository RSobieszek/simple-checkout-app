import * as yup from 'yup';

export const INITIAL_STATE = {
  product_name: '',
  product_price: 0,
  shipping_required: false,
};

export const PRODUCT_FIELDS = [
  {
    name: 'product_name',
    label: 'Product name:',
    type: 'text',
    validation: yup.string().max(20, 'Too long').required('Name is required'),
  },
  {
    name: 'product_price',
    label: 'Product price:',
    type: 'number',
    validation: yup
      .number()
      .min(0, 'Price cannot be negative value')
      .required('Price is required')
      //using mask would be better idea
      .test('2DigitsAfterDecimal', 'Incorrect price format (0.00)', (number) =>
        /^\d+(\.\d{1,2})?$/.test(number)
      ),
  },
  {
    name: 'shipping_required',
    label: 'Shipping required:',
    type: 'checkbox',
  },
];
