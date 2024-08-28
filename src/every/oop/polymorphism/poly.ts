export class Animal {
    bark() {
        console.log("Animal barks");
    }
}

export class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

export class Cat extends Animal {
    bark() {
        console.log("Cat barks");
    }
}
