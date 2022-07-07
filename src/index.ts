/* eslint-disable no-console */

const str: string = 'hi'; // string

const num: number = 10; // number

const isLoggedIn: boolean = false; // boolean

const arr: number[] = [1, 2, 3]; // array

const arr2: Array<number> = [1, 2, 3]; // Generics

const arr3: [string, number] = ['hi', 10]; // tuple

enum Avengers { Capt, IronMan, Thor } // enum
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
  while (true) {
    console.log('hello');
  }
};

const sum = (a: number, b: number): number => a + b;

// JS의 특성을 살리고 싶다면 들어오지 않아도 되는 매개변수에 ?를 붙인다.
const sum2 = (a: number, b?: number): number => a + b;

const restSum = (a: number, ...nums: number[]): number => {
  let totalOfNums = 0;
  for (const key in nums) {
    totalOfNums += nums[key];
  }
  return a + totalOfNums;
};

console.log(str);
console.log(num);
console.log(isLoggedIn);
console.log(arr);
console.log(arr2);
console.log(arr3);
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
console.log(sum2);
console.log(restSum);
