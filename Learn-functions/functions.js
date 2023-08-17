// # functions

function printMe() {
  console.log("print something");
}
printMe();

// parameters
function printThis(param) {
  console.log(param);
}
printThis("tapas");

//
const count = 100;

const countMe = function () {
  console.log("print");
};

function countMe2() {
  console.log("printing...");
}

const countMe3 = function () {
  console.log("printing again...");
};
countMe3();

const countAgain = function (a, b) {
  console.log(a, b);
};
countAgain(10, 20);

// return a function

let p = x(); // undefined

function x() {}

function y() {}

function sum(a, b) {
  return a + b;
}
sum(14, 7);

// or
function sum(a, b) {
  let ret = a + b;
  return a + b;
}
sum(14, 7);
