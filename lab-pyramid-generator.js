** start of script.js **

function pyramid(pattern, rows, upsideDown) {
  let result = "\n";

  for (let i = 0; i < rows; i++) {
    let numPattern, numSpaces;

    if (!upsideDown) { 
      numPattern = 1 + 2 * i;
      numSpaces = rows - i - 1;
    } else {   
      numPattern = 1 + 2 * (rows - i - 1);
      numSpaces = i;
    }

    result += " ".repeat(numSpaces) + pattern.repeat(numPattern) + "\n";
  }

  return result;
}


** end of script.js **

