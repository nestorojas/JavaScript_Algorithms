var grades = [73,67,38,33];

console.log(round5(grades));

function round5(x)
{
    for(let i = 0; i < x.length ; i++){
        var rounded = Math.ceil(x[i]/5)*5;
        if(rounded - x[i] < 3 && rounded >= 40){
            x[i] = rounded;
        }
    }
    return x;    
}