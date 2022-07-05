const removeFromArray = function(arr,...args) {
    //for (let i=0; i<args.length; i++) {
    //    while (arr.indexOf(args[i])>-1) {
    //        arr.splice(arr.indexOf(args[i]),1);
    //    }
    //}
    return arr.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
