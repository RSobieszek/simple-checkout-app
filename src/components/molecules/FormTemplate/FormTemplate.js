import React from 'react';

// Import components
import { Formik, Form } from 'formik';
import { Button, Container } from '@chakra-ui/react';

// Import utilities
import { renderFields } from 'utilities';

// import {FormButtons} from 'components'

function FormTemplate({
  initialValues = {},
  validationSchema,
  onSubmit,
  fields = [],
  selectResources,
}) {
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {props => (
          <Form>
            {fields.map((field, index) =>
              renderFields({ index, field, selectResources })
            )}
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default FormTemplate;
