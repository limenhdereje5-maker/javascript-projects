** start of script.js **

function fearNotLetter(str) {
  let expectedCode = str.charCodeAt(0);
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) !== expectedCode) {
      return String.fromCharCode(expectedCode);
    }
    expectedCode++;
  }
  return undefined;
}


** end of script.js **

