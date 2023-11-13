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

// When to use annotations ?
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initial it
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
