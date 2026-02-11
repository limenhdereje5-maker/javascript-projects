** start of script.js **

let num =5;
function factorialCalculator(number) {
  let result = 1;
  while(number > 0) {
    result =result*number
    number = number-1
  
  }
  return result ;
}
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg)

** end of script.js **

