const ftoc = function(f) {
  return ((f-32)/9*5).toFixed(1)*10/10;
};

const ctof = function(c) {
  return (c/5*9+32).toFixed(1)*10/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
