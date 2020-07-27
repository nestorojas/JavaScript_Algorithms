var arr = [[11,2,4],[4,5,6],[10,8,-12]];
console.log(diagonalDifference(arr)); 

function diagonalDifference(arr) {
    // Write your code here
    let sum1 = 0;
    let sum2 = 0;
    let i = 0;
    let j = arr.length;
    while(i < arr.length){
        sum1 += arr[i][i];
        sum2 += arr[i][j - 1];
        i++;
        j--;
    }
    return Math.abs(sum1 - sum2);
}