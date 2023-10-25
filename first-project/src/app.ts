let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Sam";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("An error is coming...", 500);
console.log(result);

const button = document.querySelector("button")!;

button.addEventListener("click", () => {
  console.log("Clicked !");
});

const map = new Map();
