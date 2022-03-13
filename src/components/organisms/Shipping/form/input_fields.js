export const SELECT_VALUES = [
  { name: 'Shipping Method 1', value: 'Shipping Method 1' },
  { name: 'Shipping Method 2', value: 'Shipping Method 2' },
];

export const INITIAL_STATE = {
  shipping_method: SELECT_VALUES[0].value,
};

export const SHIPPING_FIELDS = [
  {
    name: 'shipping_method',
    label: 'Shipping method:',
    type: 'select',
  },
];
