/*
Big O notation (with a capital letter O, not a zero), also called Landau's symbol, is a
symbolism used in complexity theory, computer science, and mathematics to describe the
asymptotic behavior of functions. Basically, it tells you how fast a function grows or
declines.
Landau's symbol comes from the name of the German number theoretician Edmund
Landau who invented the notation. The letter O is used because the rate of growth of a
function is also called its order.
https://web.mit.edu/16.070/www/lecture/big_o.pdf
*/


function CalculateFirst(n){
    for(let i = 0 ; i < n * 1000; i++){
        for(let j = 0; j < n * 20 ; j++){
            console.log(i+j);
        }
    }
}

function CalculateSecond(n){
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n ; j++) {
            for(let k = 0 ; k < n ; k++){
                for(let l = 0 ; l < 10 ; l++){
                    console.log(i + j + k + l);
                }
            }
        }
    }
}

function CalculateThird(n){
    for(let i = 0 ; i < 1000 ; i++) {
        console.log("Hello World!!");
    }
}

function CalculateFourth(n){
    for(let i = 0 ; i < n * 10 ; i++) {
        console.log(n);
    }
}

function CalculateFifth(n){
    for(let i = 0 ; i < n ; i * 2) {
        console.log(n);
    }
}

function CalculateSixth(n){
    while(true){
        console.log(n);
    }
}
//CalculateFirst(2); ==== O(N^2) There are 2 nested loops, Constants in front of n should be ignored

//CalculateSecond(3); ==== O(N^3) There are four nested loops, but the last loop only runs until 10

//CalculateThird(4); ==== O(1) The function runs from 0 to 1000, constant time, does not depend on n

//CalculateFourth(5); ==== O(N) The function runs from 0 to 10n, and constants (10) are ignored in Big O

//CalculateFifth(6); ==== O(log n) Since iterator is incremented by multiplying by 2 rather than adding 1, the function runs log n

//CalculateSixth(7); ==== O(infinite) There is no endig condition, function will run indefinetely.