/*
 Input : A sequence of n numbers (a1, a2, ..., an)
 Output : A sequence os n numbers reordered (a'1, a'2, ..., a'n) such that a'1 <= a'2 <= a'n
 Insertion sort works the way many people sort a hand of playing cards.  Start with an empty left hand
and the cards face down on the table, remove one card at a time from the table and insert it into the
correct position in the left hand.  To find the correct position for a card, compare it with each of 
the cards already in the hand from rigth to left
*/

var nums = [10,5,3,8,2,6,4,7,9,1];

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
console.log(InsertionSort(nums));

/*
Start at the beginning of the list and take second element and compared with the first element, either the 0 index or the 1 index, depending if it's smaller or larger than our first element. 
We now have a sorted list of length 2. We then continue on down the line, inserting elements in our sorted side of the list as the unsorted side becomes smaller.

Big O 
There are 2 nested for loops. Two nested loops means O(n²) in the worst case scenario. 
Depending on the original order, if the list is closed to sorted, it can be O(n) in a best case scenario and thus well adapted to that scenario.
 */