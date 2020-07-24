/*
You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] 
without any duplicates. You are allowed to swap any two elements. 
You need to find the minimum number of swaps required to sort the array in ascending order.

For example, given the array arr=[7,1,3,2,4,5,6] we perform the following steps:

i   arr                         swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]
It took  swaps to sort the array.
*/
function minimumSwaps(nums) {
    var count = 0;
    var start = 0;
    var end = nums.length - 1;

    do {
        var sorted = Array.from(Array(nums.length), (_, i) => i + 1);
        var swapped = false;
        for (var i = 0; i < nums.length; i++) {
            if(i == nums.length - 1 && swapped == false){
                i = 0;
                start++;
            }
            if (nums[start] > nums[end - i]) {
                var temp = nums[start];
                nums[start] = nums[end -i];
                nums[end -i] = temp;
                count++
                swapped = JSON.stringify(nums)==JSON.stringify(sorted);
            }
        }
      } while(swapped); 
      return count;  
  }
  

var arr=[4,3,1,2];
console.log(minimumSwaps(arr));