var priceArr = [10,40,5,23,59];


var result = function sortArray(priceArr) 
{ 
   var i, j; 
   for (i = 0; i < priceArr.length-1; i++){  
       for (j = 0; j < priceArr.length-i-1; j++) { 
           if (priceArr[j] >= priceArr[j+1]){
               continue;
           }
           else{
               return false;
           }
        }  
    }
    return true; 
} 

if (result === true){
    console.log("array is sorted");
}
else{
    console.log("array is not sorted");
}

