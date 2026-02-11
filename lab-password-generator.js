** start of script.js **

function generatePassword(passwordLength) {
  const string ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let index;
  let password = "";
  for(let i = 0;i < passwordLength;i++){
    index = Math.floor(Math.random()*string.length);
let pick = string[index];
password+=pick;


  }
  
  return password;
}
let password=generatePassword(10);
console.log(`Generated password: ${password}`);

** end of script.js **

