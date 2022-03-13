import * as yup from 'yup';

export const POLAND = 'Poland';
export const UNITED_STATES = 'United States';

export const SELECT_VALUES = [
  { name: POLAND, value: POLAND },
  { name: UNITED_STATES, value: UNITED_STATES },
];

export const INITIAL_STATE = {
  street: '',
  city: '',
  country: SELECT_VALUES[0].value,
};

export const ADDRESS_FIELDS = [
  {
    name: 'street',
    label: 'Street:',
    type: 'text',
    validation: yup.string().required('Street is required'),
  },
  {
    name: 'city',
    label: 'City:',
    type: 'text',
    validation: yup.string().required('City is required'),
  },
  {
    name: 'country',
    label: 'Country:',
    type: 'select',
  },
];
