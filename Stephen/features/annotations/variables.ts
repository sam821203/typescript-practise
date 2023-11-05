// : number 這個部分叫 type annotations
let apples = 5;
let speed = "fast";
let hasName = false;

// same type and value
let nothingMuch = null;
let nothing = undefined;

// built in objects
let now = new Date();

// Array with string values
let colors: string[] = ["red", "green", "yellow"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// 前面這段 (i: number) => void 是 annotation，不是會執行的程式
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
