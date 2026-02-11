** start of script.js **

function dropElements(arr, func) {
  let sliceIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      sliceIndex = i;
      return arr.slice(sliceIndex);
    }
  }
  return [];
}

** end of script.js **

