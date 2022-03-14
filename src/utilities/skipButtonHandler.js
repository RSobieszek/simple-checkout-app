const handleSkip = ({ form }) => {
  // dirty hack but it's getting late
  // basically I want to set proper xState transition based on
  // which button is pressed, but still have proper form submission flow
  form.setFieldValue('skipped', true, false);
  form.handleSubmit();
};

export default handleSkip;
