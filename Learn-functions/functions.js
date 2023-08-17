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
  return ret;
}
sum(14, 7);

// # default parameters

function calc(a, b) {
  return 2 * (a + b);
}
calc(2, 3);

function calc(a, b = 0) {
  return 2 * (a + b);
}
calc(3);

//  Rest parameters
// #rest parameters allows to accept an infinite number of arguments
//  A function can only have one rest parameter
// the rest parameter is the always last parameter

function collect(x, ...y) {
  console.log(x);
  console.log(y);
}
collect(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Arrow functions

const add = function (x, y) {
  return x + y;
};

const add1 = (x, y) => x + y;
add1(2, 3);

//  Nested function
function outer() {
  console.log("outer");
  function inner() {
    console.log("Inner");
  }
  inner();
}
outer();

// function scope
// 2 rules
// anything defined outside the function cannot access inside the function (global)
function dosomething() {
  let x = 10;
  const y = 20;
  var z = 30;

  console.log(x, y, z);
}

dosomething();
//  note that the above will return an error based on the above rule.

// the function can have access to anything outside and inside the function.

var x = 10;
const y = 20;
let z = 30;

function domore() {
  console.log(x, y, z);
}

domore();
