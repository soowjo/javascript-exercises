const repeatString = function(string,num) {
    let repStr = '';
    if (num>=0) {
        for (let i=0; i<num; i++) {
            repStr += string;
        }
        return repStr;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
