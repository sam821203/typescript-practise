import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([50, 30, -4, 5, 0]);
const charactersCollection = new CharactersCollection("Hi there");

numbersCollection.sort();
console.log(numbersCollection.data);

charactersCollection.sort();
console.log(charactersCollection.data);

// LinkedList ============================================================================
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
