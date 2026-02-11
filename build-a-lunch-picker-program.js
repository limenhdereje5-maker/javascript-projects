** start of script.js **

let lunches = [];
function addLunchToEnd(arr,str) {
arr.push(str);
console.log(`${str} added to the end of the lunch menu.`)
return arr;
}
console.log(addLunchToEnd(lunches,"pizza"))

function addLunchToStart(arr,str){
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
 return arr;
}
console.log(addLunchToStart(lunches,"burger"));

function removeLastLunch(arr) {
  
  if (arr.length===0){
    console.log("No lunches to remove.");
  }
  else{
  let removedItem = arr.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`)};

 return arr;
  
}
function removeFirstLunch(arr) {
  if (arr.length===0){
    console.log("No lunches to remove.")
  }
  else {
    let removedFirstLunch = arr.shift()
    console.log(`${removedFirstLunch} removed from the start of the lunch menu.`)
  }
  return arr;
}
function getRandomLunch(arr) {
  if (arr.length===0) {
    console.log("No lunches available.")
  }
  else {
 let randomIndex = Math.floor(Math.random() * arr.length);
 let select = arr[randomIndex];
 console.log(`Randomly selected lunch: ${select}`)
  }
}
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
}


** end of script.js **

