** start of script.js **

function bouncer(arr) {
  let arr1 =[...arr];
  for(let i =0;i < arr1.length;i++){
    if (!arr1[i]){
      arr1.splice(i,1);
      i--
    }
  }
  return arr1;
}

** end of script.js **

