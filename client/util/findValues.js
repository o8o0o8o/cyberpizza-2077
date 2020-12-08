export const findValues = ref => {
  const obj = {};
  Array.from(ref.current).forEach(formEl => {
    if (formEl.name !== undefined && formEl.name !== '') obj[formEl.name] = formEl.value;
  });
  return obj;
};
