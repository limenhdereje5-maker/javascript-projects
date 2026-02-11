** start of script.js **

function titleCase(str) {
  let array = "";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    array += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase() + " ";
  }
  return array.trim();
}

** end of script.js **

