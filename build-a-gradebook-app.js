** start of script.js **

function getAverage(arr) {
  let sum =0;
  for(let i =0;i < arr.length;i++) {
sum+=arr[i];
  }
  return sum/arr.length
}
function getGrade(score) {
  if (score >=100){
    return "A+";
  } else if (score >=90){
    return "A";
  }else if (score >= 80){
    return "B";
  }else if (score >= 70){
    return "C";
  
  } else if (score >= 60){
    return "D";
  }else if (0<=score <59){
    return "F";
  }
}
function hasPassingGrade(score) {
  if (score >= 60){
    return true;
  }else{
    return false;
  }
}
function studentMsg(arr,score) {
  if (hasPassingGrade(score)){
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You passed the course.`
  }else {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You failed the course.`
  }
}

** end of script.js **

