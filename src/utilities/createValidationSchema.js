import * as yup from 'yup';

const createValidationSchema = fields => {
  const validationRules = fields.reduce((acc, { name, validation }) => {
    return {
      ...acc,
      [name]: validation,
    };
  }, {});

  return yup.object().shape(validationRules);
};

export default createValidationSchema;
