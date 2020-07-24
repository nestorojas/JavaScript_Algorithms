/*
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
Given an array of integers representing the color of each sock, determine how many pairs of socks 
with matching colors there are.

For example, there are n = 7 socks with colors ar = [1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2. 
There are three odd socks left, one of each color. The number of pairs is 2.
*/
var arr = [10,20,20,10,10,30,50,10,20];
var n = arr.length;

console.log(sockMerchant(n,arr));

function sockMerchant(n, ar) {
    let count = 0;
    if(n === ar.length){
        var frequency = [], prev;
        ar.sort();
        for(let i = 0; i < n; i++){
            if(ar[i] !== prev){
                frequency.push(1);
            }else{
                frequency[frequency.length - 1]++;
            }
            prev = ar[i];
        }
        for(let j = 0; j < n; j++){
            if(frequency[j] > 1){
                count += Math.floor(frequency[j] / 2);
            }
        }
    }
    return count;
}
