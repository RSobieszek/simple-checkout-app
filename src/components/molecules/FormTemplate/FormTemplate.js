import React from 'react';

// Import components
import { Formik, Form } from 'formik';
import { Container } from '@chakra-ui/react';
import { FormButtons } from 'components';

// Import utilities
import { renderFields } from 'utilities';

function FormTemplate({
  initialValues = {},
  validationSchema = null,
  onSubmit = () => {},
  cancel = () => {},
  skip = () => {},
  fields = [],
  selectResources = [],
  hideCancelButton,
  submitButtonText,
  skipButtonText,
}) {
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(_) => (
          <Form>
            {fields.map((field, index) =>
              renderFields({ index, field, selectResources })
            )}
            <FormButtons
              cancel={cancel}
              hideCancelButton={hideCancelButton}
              submitButtonText={submitButtonText}
              skipButtonText={skipButtonText}
              skip={skip}
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default FormTemplate;
