import { ICal } from "./abstraction/cal";
import { Cal } from "./abstraction/cal.impl";
import { Person } from "./encapsulation/person";
import { Student } from "./inherritance/student";
import { Animal, Cat, Dog } from "./polymorphism/poly";

const cal: ICal = new Cal();
console.log(cal.add(1, 2));
console.log(cal.sub(1, 2));
console.log(cal.mul(1, 2));
console.log(cal.div(1, 2));

const me = new Person("John Doe", 30);
console.log(me.getName);
console.log(me.getAge);

me.setName = "Dong Chul";
me.setAge = -1;

console.log(me.getName);
console.log(me.getAge);
console.log(me.getMessage);

const student = new Student("dev", 1999);
console.log(student.getName);
console.log(student.getAge);
console.log(student.getMessage);
console.log(student.greet());

const myAnimal = new Animal();
const dog = new Dog();
const cat = new Cat();
myAnimal.bark();
dog.bark();
cat.bark();
