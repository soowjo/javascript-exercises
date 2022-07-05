const caesar = function(str, num) {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let newStr = ''
    while (num<0) {
        num += 26;
    }
    for (let i in str) {
        if (str[i].match(/[A-Z]/)) {
            let j = upper.indexOf(str[i]);
            newStr += upper[(j+num)%26];
        }
        else if (str[i].match(/[a-z]/)) {
            let j = lower.indexOf(str[i])
            newStr += lower[(j+num)%26];
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
};

// Do not edit below this line
module.exports = caesar;
