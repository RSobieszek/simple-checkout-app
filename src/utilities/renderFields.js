import React from 'react';

// Import components
import { Field } from 'formik';
import { Select, NumberInput, Checkbox } from '@chakra-ui/react';
import { TextInput, NumInput, CheckboxInput } from 'components';

const renderFields = ({ field, index, selectResources = [] }) => {
  const { type, name, placeholder, label } = field;

  switch (type) {
    case 'select':
      return (
        <Field
          key={`${name}-${index}`}
          name={name}
          placeholder={placeholder}
          component={Select}
        >
          {selectResources[name].map(({ name, value }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </Field>
      );

    case 'number':
      return (
        <Field
          key={`${name}-${index}`}
          name={name}
          label={label}
          placeholder={placeholder}
          component={NumInput}
        />
      );

    case 'checkbox':
      return (
        <Field
          key={`${name}-${index}`}
          name={name}
          label={label}
          placeholder={placeholder}
          component={CheckboxInput}
        />
      );

    default:
      return (
        <Field
          key={`${name}-${index}`}
          name={name}
          label={label}
          placeholder={placeholder}
          component={TextInput}
        />
      );
  }
};

export default renderFields;
