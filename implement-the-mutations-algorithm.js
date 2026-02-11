** start of script.js **

function mutation(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  for (let char of second) {
    if (!first.includes(char)) {
      return false;
    }
  }
  return true;
}

// Example tests
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["hello", "hey"]));   // false
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
console.log(mutation(["Mary", "Army"])); // true
console.log(mutation(["Mary", "Aarmy"])); // true
console.log(mutation(["Alien", "line"])); // true
console.log(mutation(["floor", "for"])); // true
console.log(mutation(["hello", "neo"])); // false
console.log(mutation(["voodoo", "no"])); // false
console.log(mutation(["ate", "date"])); // false
console.log(mutation(["Tiger", "Zebra"])); // false
console.log(mutation(["Noel", "Ole"])); // true


** end of script.js **

