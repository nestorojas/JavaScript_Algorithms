/*Given a 6X6 2D Array arr
  1 1 1 0 0 0
  0 1 0 0 0 0
  1 1 1 0 0 0
  0 0 0 0 0 0
  0 0 0 0 0 0
  0 0 0 0 0 0
  We define an hourglass in A to be a subset of values with indices falling in this 
  pattern in arr's graphical representation:
  a b c
    d
  e f g  
There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. 
Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. 
  */

 function hourglassSum(arr) {
     var result = [];
     for(var i = 0; i <= 3; i++){
         for(var j = 0; j <= 3; j++){
             result.push(arr[i][j] + arr[i][j+1]+ arr[i][j+2]+ arr[i+1][j+1]+ arr[i+2][j]+ arr[i+2][j+1]+ arr[i+2][j+2]);
         }
     }

     return Math.max(...result);
}


var arr = [[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]];
let result = hourglassSum(arr);
console.log(result + "\n");
if(result == 19){
    console.log("Pass");
}
else{
    console.log("Failed");
}