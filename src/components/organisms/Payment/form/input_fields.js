export const SELECT_VALUES = [
  { name: 'Payment Method 1', value: 'Payment Method 1' },
  { name: 'Payment Method 2', value: 'Payment Method 2' },
  { name: 'Payment Method 3', value: 'Payment Method 3' },
];

export const INITIAL_STATE = {
  shipping_method: SELECT_VALUES[0].value,
};

export const PAYMENT_FIELDS = [
  {
    name: 'payment_method',
    label: 'Payment method:',
    type: 'select',
  },
];
