var numArr = [1,2,3,4,5];

for(var i = 0; i < numArr.length; i++){
    numArr[i] = numArr[i] * 6;
}

numArr.push(48);

numArr.splice(2,1);

document.write(numArr);