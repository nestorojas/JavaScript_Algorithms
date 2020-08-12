/*
INSERTION SORT
 Input : A sequence of n numbers (a1, a2, ..., an)
 Output : A sequence os n numbers reordered (a'1, a'2, ..., a'n) such that a'1 <= a'2 <= a'n
 Insertion sort works the way many people sort a hand of playing cards.  Start with an empty left hand
and the cards face down on the table, remove one card at a time from the table and insert it into the
correct position in the left hand.  To find the correct position for a card, compare it with each of 
the cards already in the hand from rigth to left
*/

var nums = [10,5,3,8,2,6,4,7,9,1];
var exer1 = [58,41,59,26,41,31,1,3,100]
/*
Start at the beginning of the list and take second element and compared with the first element, either the 0 index or the 1 index, depending if it's smaller or larger than our first element. 
We now have a sorted list of length 2. We then continue on down the line, inserting elements in our sorted side of the list as the unsorted side becomes smaller.

Big O 
There are 2 nested for loops. Two nested loops means O(n²) in the worst case scenario. 
Depending on the original order, if the list is closed to sorted, it can be O(n) in a best case scenario and thus well adapted to that scenario.
 */

function InsertionSort(nums){
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
          if (nums[i] < nums[j]) {
            let spliced = nums.splice(i, 1);
            nums.splice(j, 0, spliced[0]);
          }
        }
      }
    return nums;
}

function InsertionSort2(nums){
  for(let i = 1; i < nums.length; i++){
    let key = nums[i];
    let next = i - 1;
    while(nums[next] > key){
      nums[next + 1] = nums[next];
      next = next - 1;
    }
    nums[next + 1] = key;
  }
  return nums;
}
/*
BUBBLE SORT
It is the simplest approach, works by repeatedly swapping the adjacent elements is they are not in order
 */

 function BubbleSort(nums){
   do{
     var swapped = false;
     for(let i = 0 ; i < nums.length ; i++){
       if(nums[i] > nums[i+1]){
         var key = nums[i];
         nums[i] = nums[i + 1];
         nums[i + 1] = key;
         swapped = true;
       }       
     }
   }while(swapped);
   return nums;
 }

/*
DIVIDE AND CONQUER - MERGE SORT
This type of algorithm breaK the problem into several subproblems that are similar to the original problem but 
in smaller size, solve the subproblems recursevely, and then combine these solutions to create a solution to 
the original problem.
Divide : The problem into a number of subproblems that are smaller instances of the same problem
Conquer: The subproblem by solveing them recusevely.
Combine : the solutions to the subproblems into the solution for the original problem.

*/
 function mergeSort(nums){
  if (nums.length < 2) {//if the Array contains only one element then it is already sorted
    return nums;
  }
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle); // Divide the Problem into Subproblems
  const right = nums.slice(middle); // Subproblems that are smaller instances
  
  return merge(mergeSort(left), mergeSort(right)); //Uses recursion to solving the subproblems
}

function merge(left, right){
  const results = []; // A new variable to hold the solution
  
  while (left.length && right.length) {
    
    if (left[0] <= right[0]) {
      results.push(left.shift());// result add one item  which is taken from left array
    }
    else {
      results.push(right.shift());// result add one item  which is taken from rigth array
    }
  }
  
  return results.concat(left, right);
}
/*
DIVIDE AND CONQUER - QUICK SORT, taken from https://btholt.github.io/four-semesters-of-cs/
TIt's another divide-and-conquer, recursive algorithm but it takes a slightly different approach. 
The basic gist is that you take the last element in the list and call that the pivot. 
Everything that's smaller than the pivot gets put into a "left" list and everything that's greater get's 
put in a "right" list. You then call quick sort on the left and right lists independently (hence the recursion.)
After those two sorts come back, you concatenate the sorted left list, the pivot, and then the right list 
(in that order.) The base case is when you have a list of length 1 or 0, where you just return the list given to you.

*/
function quickSort(nums){
  if(nums.length < 2){
    return nums;
  }
  const length = nums.length - 1;
  const pivot = nums[length]; //Pivot is the last Item
  const left = [];
  const rigth = [];
  for(let i = 0 ; i < length ; i++){
    if(nums[i] < pivot){
      left.push(nums[i]);
    }
    else{
      rigth.push(nums[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(rigth)];
}

//console.log(InsertionSort2(exer1));
//console.log(BubbleSort(exer1));
//console.log(mergeSort(exer1));
console.log(quickSort(exer1));