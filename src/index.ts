/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */

const str: string = 'hi'; // string

const num: number = 10; // number

const isLoggedIn: boolean = false; // boolean

const arr: number[] = [1, 2, 3]; // array

const arr2: Array<number> = [1, 2, 3]; // Generics

const arr3: [string, number] = ['hi', 10]; // tuple

// enum을 사용할 때는 같은 자료형을 사용하는 것이 좋음.
enum Avengers { Capt, IronMan, Thor } // 숫자 enum
enum Avengers2 { Capt = 'Capt', IronMan = 'IronMan', Thor = 'Thor' } // 문자 enum
const heroCapt: Avengers = Avengers.Capt;
const heroIronMan: Avengers = Avengers.IronMan;
const heroThor: Avengers = Avengers.Thor;

const str33: any = 'hi'; // 기존 Js로 된 코드들을 점진적으로 변경하는데 사용하는 타입
const num33: any = 10;
const arr33: any = ['a', 2, true];

const unuseful: void = undefined; // undefined만 할당 가능
function notuse(): void { // 반환값 설정 금지
  console.log('sth');
}

// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
const neverEnd = (): never => {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log('hello');
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
const person = { name: 'Capt', age: 28 };
logAge(person);

interface CraftBeer {
  name: string;
  hop?: number; // 옵션 속성
  readonly brand: string; // const같은 느낌 한번 선언하면 읽기만 가능.
}

const myBeer: CraftBeer = {
  name: 'Saporo',
  brand: 'Belgian Monk',
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
  console.log('로그인 했습니다');
  return true;
};

interface CraftBeer2 {
  beerName: string;
  nameBeer(beer: string): void;
}

// 클래스가 일정 조건을 만족하도록 타입 규칙을 정할 수 있습니다.
class myBeer2 implements CraftBeer2 {
  beerName: string = 'Baby Guinness';

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
fe.name = 'josh';
fe.skill = 'TypeScript';

// 유니온 타입이란 자바스크립트의 OR 연산자(||)와 같이 A이거나 B이다 라는 의미의 타입입니다.
function logText(text: string | number) {
  console.log(text);
}

// 유니온 타입을 사용하는 경우
function getAge(age: number | string) {
  if (typeof age === 'number') {
    age.toFixed(); // 정상 동작, age의 타입이 `number`로 추론되기 때문에 숫자 관련된 API를 쉽게 자동완성 할 수 있다.
    return age;
  }
  if (typeof age === 'string') {
    return age;
  }
  return new TypeError('age must be number or string');
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
