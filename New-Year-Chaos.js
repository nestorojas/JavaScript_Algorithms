/*It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, 
and each person wears a sticker indicating their initial position in the queue. Initial positions increment by 1 from 1 at 
the front of the line to  at the back.

Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, 
they still wear the same sticker denoting their original places in line. One person can bribe at most two others. 
For example, if n=8  and Person 5  bribes Person 4 , the queue will look like this: 1,2,3,5,4,6,7,8.

Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

Function Description

Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, 
or 'Too chaotic' if the line configuration is not possible.

minimumBribes has the following parameter(s):

q: an array of integers

*/

function minimumBribes(q) {
    var count = 0;
    var swaps = [];
    do{
        var swapped = false;
        for(var i = 0; i < q.length; i++){
            if(q[i] > q[i+1]){
                var bribes = countswaps(swaps, q[i]);
                swaps.push(q[i]);
                if(bribes < 2){
                    var temp = q[i];
                    q[i] = q[i+1];
                    q[i+1] = temp;
                    swapped = true;
                    count++;
                }
                else{
                    return "Too chaotic"
                }
            }
        }
    }while(swapped);
    return count;
}
function countswaps(swaps, m){
    var res = 0;
    if(swaps.length > 0){
        for(var i = 0; i < swaps.length; i++){
            if(m === swaps[i]){
                res++;
            }
        }
    }
    return res;
}

var line = [2,5,1,3,4]
var bribes = minimumBribes(line);
if(bribes == 3){
    console.log("pass, total number of bribes: " + bribes);
}
else{
    console.log("fail, check this number: " + bribes);
}