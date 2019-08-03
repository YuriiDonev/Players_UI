
// define input type
export const defineValueType = (value) => {
  if (value && typeof value === 'number') {
    return 'number';
  } else {
    return 'text';
  }
}
