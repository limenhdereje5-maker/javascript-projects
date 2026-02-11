** start of script.js **

function frankenSplice(arr1, arr2, index) {
  let copy = [...arr2];
  
  for (let i = 0; i < arr1.length; i++) {
    copy.splice(index, 0, arr1[i]);
    index++;
  }
  
  return copy;
}

** end of script.js **

