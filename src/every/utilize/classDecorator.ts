@test
class Person {
    constructor(public name: string) {}
}

function test<T extends { new (...args: any[]): object }>(constructor: T) {
    return class extends constructor {
        type = "test";
    };
}

const person2 = new Person("name");
console.log(person2);
