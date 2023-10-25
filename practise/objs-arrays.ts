// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Sam",
//   age: 29,
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// ADMIN = 5 這樣做可以重新指派，會變成 5, 6, 7
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Sam",
  age: 29,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: any[];
favoriteActivities = ["Sports", 1];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

if (person.role === Role.AUTHOR) {
  console.log("Is AUTHOR");
}
