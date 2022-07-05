const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(args) {
	sumAll = 0;
  for (let i in args) {
    sumAll += Number(args[i])
  }
  return sumAll;
};

const multiply = function(args) {
  mulAll = 1;
  for (let i in args) {
    mulAll *= Number(args[i])
  }
  return mulAll;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	fac = 1
  while (a>0) {
    fac *= a;
    a--; 
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
