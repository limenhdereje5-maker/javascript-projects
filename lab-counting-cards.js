** start of script.js **

let count = 0;
function cardCounter(card) {
  if (typeof card ==="string"){
     if (card =="J" || card =="Q" || card == "K" || card =="A") {
       count -= 1
     }
  }
  else if (typeof card ==="number") {
     if (card==2 || card==3  || card ==4 || card ==5 || card == 6) {
       count +=1
        }
         else if(card == 10) {
           count -=1
         }
         else if (card == 7 || card ==8 || card ==9){

         }
  }
  if (count>0){
    return `${count} Bet`
  }
  if(count<=0){
return `${count} Hold`
  }
  }

console.log(cardCounter(10))

** end of script.js **

