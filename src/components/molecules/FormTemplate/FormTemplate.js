import React from 'react';

// Import components
import { Formik, Form } from 'formik';
import { Container } from '@chakra-ui/react';

// Import utilities
import { renderFields } from 'utilities';
import { FormButtons } from 'components';

// import {FormButtons} from 'components'

function FormTemplate({
  initialValues = {},
  validationSchema = null,
  onSubmit = () => {},
  cancel = () => {},
  fields = [],
  selectResources = [],
  hideCancelButton,
  submitButtonText,
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
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default FormTemplate;
