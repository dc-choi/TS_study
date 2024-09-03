/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */

// eslint-disable-next-line max-classes-per-file
const str: string = "hi"; // string

const num: number = 10; // number

const isLoggedIn: boolean = false; // boolean

const arr: number[] = [1, 2, 3]; // array

const arr2: Array<number> = [1, 2, 3]; // Generics

const arr3: [string, number] = ["hi", 10]; // tuple

// enum을 사용할 때는 같은 자료형을 사용하는 것이 좋음.
enum Avengers {
    Capt,
    IronMan,
    Thor,
} // 숫자 enum
enum Avengers2 {
    Capt = "Capt",
    IronMan = "IronMan",
    Thor = "Thor",
} // 문자 enum
const heroCapt: Avengers = Avengers.Capt;
const heroIronMan: Avengers = Avengers.IronMan;
const heroThor: Avengers = Avengers.Thor;

const str33: any = "hi"; // 기존 Js로 된 코드들을 점진적으로 변경하는데 사용하는 타입
const num33: any = 10;
const arr33: any = ["a", 2, true];

const unuseful: void = undefined; // undefined만 할당 가능
function notuse(): void {
    // 반환값 설정 금지
    console.log("sth");
}

// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
const neverEnd = (): never => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        console.log("hello");
    }
};

const sum = (a: number, b: number): number => a + b;

// JS의 특성을 살리고 싶다면 들어오지 않아도 되는 매개변수에 ?를 붙인다.
// const sum2 = (a: number, b?: number): number => a + b;

const restSum = (a: number, ...nums: number[]): number => {
    let totalOfNums = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const key in nums) {
        totalOfNums += nums[key];
    }
    return a + totalOfNums;
};

/**
 * 타입스크립트에서의 인터페이스는 보통 다음과 같은 범주에 대해 약속을 정의할 수 있습니다.
 * 객체의 스펙(속성과 속성의 타입)
 * 함수의 파라미터
 * 함수의 스펙(파라미터, 반환 타입 등)
 * 배열과 객체를 접근하는 방식
 * 클래스
 */

interface personAge {
    age: number;
}

// logAge()의 인자는 personAge 라는 타입을 가져야한다
function logAge(param: personAge) {
    console.log(param.age);
}
const person = { name: "Capt", age: 28 };
logAge(person2);

interface CraftBeer {
    name: string;
    hop?: number; // 옵션 속성
    readonly brand: string; // const같은 느낌 한번 선언하면 읽기만 가능.
}

const myBeer: CraftBeer = {
    name: "Saporo",
    brand: "Belgian Monk",
};
// hop을 옵션 속성으로 선언했기 때문에 오류가 나지 않음.
function brewBeer(beer: CraftBeer) {
    console.log(beer.name); // Saporo
}
brewBeer(myBeer);

// 배열을 선언할 때 ReadonlyArray<T> 타입을 사용하면 읽기 전용 배열을 생성할 수 있습니다.
const arr4: ReadonlyArray<number> = [1, 2, 3];

// 인터페이스는 함수의 타입을 정의할 때에도 사용할 수 있습니다.
interface login {
    (username: string, password: string): boolean;
}

const loginUser: login = (id: string, pw: string) => {
    console.log(`id: ${id}`);
    console.log(`pw: ${pw}`);
    console.log("로그인 했습니다");
    return true;
};

interface CraftBeer2 {
    beerName: string;
    nameBeer(beer: string): void;
}

// 클래스가 일정 조건을 만족하도록 타입 규칙을 정할 수 있습니다.
class myBeer2 implements CraftBeer2 {
    beerName: string = "Baby Guinness";

    nameBeer(b: string) {
        this.beerName = b;
    }

    // constructor() {}
}

// 클래스와 마찬가지로 인터페이스도 인터페이스 간 확장이 가능합니다.
interface Person {
    name: string;
}
interface Developer extends Person {
    skill: string;
}
const fe = {} as Developer;
fe.name = "josh";
fe.skill = "TypeScript";

// 유니온 타입이란 자바스크립트의 OR 연산자(||)와 같이 A이거나 B이다 라는 의미의 타입입니다.
function logText(text: string | number) {
    console.log(text);
}

// 유니온 타입을 사용하는 경우
function getAge(age: number | string) {
    if (typeof age === "number") {
        age.toFixed(); // 정상 동작, age의 타입이 `number`로 추론되기 때문에 숫자 관련된 API를 쉽게 자동완성 할 수 있다.
        return age;
    }
    if (typeof age === "string") {
        return age;
    }
    return new TypeError("age must be number or string");
}
/**
 * 유니온 타입을 사용할 경우 코딩을 하게되면 오류를 막기 위해 두 자료형의 교집합부분만 사용가능하다.
 * 즉, 예제처럼 String | number를 하게되면 실제로 사용할 수 있는 부분은 toString()같은 메서드밖에 없다.
 */

interface man {
    name: string;
    age: number;
}
interface woman {
    name: string;
    skill: number;
}
// 인터섹션 타입은 여러 타입을 모두 만족하는 하나의 타입을 의미합니다.
type peple = man & woman;

/** 결과적으로 peple의 타입은 다음과 같습니다.
 * {
 *    name: string;
 *    age: number;
 *    skill: string;
 * }
 * 이처럼 & 연산자를 이용해 여러 개의 타입 정의를 하나로 합치는 방식을 인터섹션 타입 정의 방식이라고 합니다.
 */

// 타입스크립트는 객체의 특정 속성의 접근과 할당에 대해 제어할 수 있습니다. 이를 위해선 해당 객체가 클래스로 생성한 객체여야 합니다. 아래의 간단한 예제를 봅시다.
class Dev {
    private __devName: string;

    get devName(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this.__devName;
    }

    set devName(value: string) {
        if (value && value.length > 5) {
            throw new Error("이름이 너무 깁니다");
        }
        // eslint-disable-next-line no-underscore-dangle
        this.__devName = value;
    }
}
// get만 선언하고 set을 선언하지 않는 경우에는 자동으로 readonly로 인식됩니다.

const josh = new Dev();
josh.devName = "Josh Bolton"; // Error
josh.devName = "Josh";

// 추상 클래스는 특정 클래스의 상속 대상이 되는 클래스이며 좀 더 상위 레벨에서 속성, 메서드의 모양을 정의합니다.
abstract class Developer {
    abstract coding(): void; // 'abstract'가 붙으면 상속 받은 클래스에서 무조건 구현해야 함

    // eslint-disable-next-line class-methods-use-this
    drink(): void {
        console.log("drink sth");
    }
}

class FrontEndDeveloper extends Developer {
    // eslint-disable-next-line class-methods-use-this
    coding(): void {
        // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
        console.log("develop web");
    }

    // eslint-disable-next-line class-methods-use-this
    design(): void {
        console.log("design web");
    }
}

// const dev = new Developer(); // error: cannot create an instance of an abstract class
const josh2 = new FrontEndDeveloper();
josh2.coding(); // develop web
josh2.drink(); // drink sth
josh2.design(); // design web

console.log(str);
console.log(num);
console.log(isLoggedIn);
console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(Avengers2);
console.log(heroCapt);
console.log(heroIronMan);
console.log(heroThor);
console.log(str33);
console.log(num33);
console.log(arr33);
console.log(unuseful);
console.log(notuse);
console.log(neverEnd);
console.log(sum);
// console.log(sum2);
console.log(restSum);
console.log(arr4);
console.log(loginUser);
console.log(myBeer2);
