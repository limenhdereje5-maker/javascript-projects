** start of script.js **

function pairElement(str) {
  const array = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let pair = [];

    if (char === "A") pair = ["A", "T"];
    else if (char === "T") pair = ["T", "A"];
    else if (char === "C") pair = ["C", "G"];
    else if (char === "G") pair = ["G", "C"];

    array.push(pair);
  }

  return array;
}

** end of script.js **

