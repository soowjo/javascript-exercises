const findTheOldest = function(arr) {
    function old(high, low) {
        if (high) {
            return high-low;
        }
        else {
            return new Date().getFullYear() - low;
        }
    }
    arr.forEach(element => {
        element.age = old(element.yearOfDeath, element.yearOfBirth)        
    });
    console.log(arr);
    let oldest = arr[0];
    for (let i=1; i<arr.length; i++) {
        if (arr[i].age > oldest.age) {
            oldest = arr[i]
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
