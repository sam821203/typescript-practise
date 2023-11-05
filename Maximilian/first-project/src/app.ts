const button = document.querySelector("button")!;

function clickHandler(message: string) {
  console.log("Clicked ! " + message);
}

// a comment
if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome"));
}

const add = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addNumbers = add(5, 10, 2.7);
console.log(addNumbers);

// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = "Sam";

// if (typeof userInput === "string") {
//   userName = userInput;
// }

// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }

// const result = generateError("An error is coming...", 500);
// console.log(result);

// const map = new Map();
