** start of script.js **

function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {
  let sum = distancePoints+stylePoints+windComp+kPointBonus;
const arr =[165.5,172.0,158.0,180.0,169.5,175.0,162.0,170.0];
let sorted = arr.sort((a,b)=>b-a);
if(sum > sorted[0]){
  return "Gold";
}
else if(sum > sorted[1] && sum < sorted[0]){
  return "Silver";
}
else if(sum > sorted[2] && sum < sorted[1]){
  return "Bronze";
}else{
  return "No Medal";
}


}

** end of script.js **

