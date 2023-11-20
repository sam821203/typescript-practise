"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([50, 30, -4, 5, 0]);
const charactersCollection = new CharactersCollection_1.CharactersCollection("Hi there");
numbersCollection.sort();
console.log(numbersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data);
// LinkedList ============================================================================
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
