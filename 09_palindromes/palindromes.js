const palindromes = function (arg) {
    let arr = arg.toLowerCase().match(/[a-z]/g);;
    let str = arr.join('');
    let reverseArr = arr.reverse();
    let reverseStr = reverseArr.join('');
    if (str == reverseStr) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
