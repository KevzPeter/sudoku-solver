function sanitizeInput(e) {
  let input = e.target.value;
  if (isNaN(input) || isNaN(parseInt(input))) {
    return -1;
  } else {
    return parseInt(input);
  }
}

export default sanitizeInput;
