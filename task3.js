// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers,b)
{
    let sum=0;
    for(num of numbers)
    {
        sum+=num;
    }
    return sum/b;
}

let x=make_avg([2,2,2,2,2],5);
console.log(x);