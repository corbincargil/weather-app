function ftoc(temp) {
  const cels = (temp - 32) * (5 / 9);
  const result = parseFloat(cels.toFixed(0));
  return result;
}

function ctof(temp) {
  const far = temp * (9 / 5) + 32;
  const result = parseFloat(far.toFixed(0));
  return result;
}

function ktoc(temp) {
  const cels = temp - 273.15;
  const result = parseFloat(cels.toFixed(0));
  return result;
}

export { ftoc, ctof, ktoc };
