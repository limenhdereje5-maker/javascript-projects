** start of script.js **

function uniteUnique(...arrays){
  const seen = new Set();
  const result = [];
  
  for(const arr of arrays){
    for(const item of arr){
      if(!seen.has(item)){
        seen.add(item);
        result.push(item);
      }
    }
  }
  
  return result;
}

** end of script.js **

