** start of script.js **

function findLongestWordLength (sentence) {
  let words = sentence.split(" ");
  let longestWord ="";
  for(const word of words ) {
    if (word.length > longestWord.length) {
      longestWord = word;
      
    }
  
  }
  return longestWord.length;
}

** end of script.js **

