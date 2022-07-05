const str: string = 'hi'; // string

const num: number = 10; // number

const isLoggedIn: boolean = false; // boolean

let arr: number[] = [1,2,3]; // array

const arr2: Array<number> = [1,2,3]; // Generics

let arr3: [string, number] = ['hi', 10]; // tuple

enum Avengers { 
  Capt,
  IronMan,
  Thor
} // enum
const hero: Avengers = Avengers.Capt;

const str33: any = 'hi'; // 기존 Js로 된 코드들을 점진적으로 변경하는데 사용하는 타입
const num33: any = 10;
const arr33: any = ['a', 2, true];

const unuseful: void = undefined || null;
function notuse(): void {
  console.log('sth');
}

// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
function neverEnd(): never {
  while (true) {
    console.log('hello');
  }
}

function sum(a: number, b: number): number {
  return a + b;
}

function restSum(a: number, ...nums: number[]): number {
  const totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return a + totalOfNums;
}
