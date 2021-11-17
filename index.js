
function findUniq(arr) {
    let theNotEqualNumber;
  
    if(arr[0]===arr[1]){
              theRightNumber=arr[0];
    }else if(arr[0]===arr[2]){
              theRightNumber=arr[0]
    }else{theRightNumber=arr[2]}
           
    arr.forEach(value => {
              
    if(value!=theRightNumber){
  
    theNotEqualNumber = value;
  
              }
              
          });
          document.querySelector("#result").textContent=`The number which is different 
          from the others: ${theNotEqualNumber}`;
     return theNotEqualNumber;
  
    }

  findUniq([ 0, 0, 1, 0 ])