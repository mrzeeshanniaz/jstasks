const nums = [-12,345,2,6,7896];

function EventDigitNum(arr){
    let count = 0;
    nums.forEach(num => {
       (Math.ceil(Math.log10(Math.abs(num) + 1)))%2 === 0 && count++;
    });
    return count;
}

console.log(EventDigitNum(nums));