//Big O is the mathematical expression for how long an algorithm takes to run
//depending on how big is the input (data) 

//Constant O(1) -- regardless of the size of the input "numbers" the time is constant
const getLast = numbers =>
numbers[numbers.length - 1];

//Linear O(N) -- Being N the number of elements of the input "numbers" time grows on par with N
const findIndex = (numbers, match) => {
    for(let i = 0; i < numbers.length; i++)
        if(numbers[i] == match)
            return i;

    return -1;
}

//Quadratic O(N^2) -- Being N the number of elements of the input "numbers" time grows exponentially related to N
const buildSquareMatrix = numbers =>{
    let matrix = [];
    for(let i = 0; i < numbers.length; i++){
        matrix [i] = [];
        for(let j = 0; j < numbers.length; j++){
            matrix[i].push(numbers[j]);
        }
    }
    return matrix;  
}

let numbers = [1,2,3,4,5,6,7,8,9,10,11];
//console.log(getLast(numbers));
//console.log(findIndex(numbers, 10));
//console.log(buildSquareMatrix(numbers));

//Fibonacci algorithm takes linear time, iterate N-2 
// O(N)
function fib(n){
    let arr = [1, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr
  }
  console.log(fib(10));