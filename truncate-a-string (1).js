** start of script.js **

function truncateString(string,number) {
  if (string.length > number) {
     string = string.slice(0,number)+"..."
     return string
  } if(string.length <=number){
    return string
  } 
}

** end of script.js **

