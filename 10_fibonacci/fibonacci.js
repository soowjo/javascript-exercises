const fibonacci = function(i) {
    if (i <= 0) {
        return "OOPS"
    }
    if (i <= 2) {
        return 1;
    }
    return fibonacci(i-1)+fibonacci(i-2)
};

// Do not edit below this line
module.exports = fibonacci;
