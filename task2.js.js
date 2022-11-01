let num = 121;

var isPalindrome = function(x) {
    const reversedNum = num => num.toString().split('').reverse().join('');
    return x === Number(reversedNum(x));
};

isPalindrome(num);