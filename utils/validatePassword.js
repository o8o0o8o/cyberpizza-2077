export const validateEmail = password => {
  const PASSWORD_VALIDATION_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])((?=.*?[^\w\s])|(?=.*?_)).{8,}$/;
  return PASSWORD_VALIDATION_PATTERN.test(String(password).toLowerCase());
};
