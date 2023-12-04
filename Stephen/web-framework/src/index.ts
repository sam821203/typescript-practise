import { User } from "./models/User";

const user = new User({ name: "name6", age: 50 });

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("firstName", "lastName");
console.log(person.fullName);
