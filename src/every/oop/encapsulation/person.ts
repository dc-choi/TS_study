export class Person {
    #message: string = "Hello, World!"; // private field

    constructor(
        private name: string,
        private age: number
    ) {}

    get getName(): string {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }

    get getAge(): number {
        return this.age;
    }

    set setAge(age: number) {
        if (age >= 0) {
            this.age = age;
        }
    }

    get getMessage(): string {
        return this.#message;
    }
}
