class Member {
    constructor(private readonly _name: string) {}

    get name() {
        return this._name;
    }
}
const p = new Member("Lee");
console.log(p);
console.log(p.name);

class Student2 extends Member {
    constructor(
        name: string,
        private readonly _course: string
    ) {
        super(name);
    }

    get course() {
        return this._course;
    }
}
const s = new Student2("Kim", "Math");
console.log(s);
console.log(s.name);
console.log(s.course);

function MyMember(name: string) {
    this.name = name;
}
MyMember.prototype.greet = function () {
    console.log(`My name is ${this.name}`);
};

const m = new MyMember("Lee");
console.log(m);
m.greet();

function MyStudent(name: string, ID: string) {
    MyMember.call(this, name);
    this.ID = ID;
}
MyStudent.prototype = Object.create(MyMember.prototype);
MyStudent.prototype.constructor = MyStudent;
MyStudent.prototype.getID = function () {
    console.log(`My ID is ${this.ID}`);
};

const ms = new MyStudent("Kim", "123");
console.log(ms);
ms.greet();
ms.getID();
