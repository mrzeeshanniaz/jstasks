const s = "Let's take LeetCode contest";

var reverseWords = function(s) {
    let arrChr = s.split(' ');
    arrChr.forEach((num,i)=>{
        arrChr[i] = num.split('').reverse().join('');
    })
    return arrChr.join(' ');
};

reverseWords(s);