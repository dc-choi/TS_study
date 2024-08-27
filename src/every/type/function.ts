function add(a: number, b: number): number {
    return a + b;
}
console.log(add(2, 1));

const minus: (a: number, b: number) => number = (a: number, b: number): number => a - b;
console.log(minus(2, 1));

/**
 * Type alias for function
 */
type MultiplyFunction = (a: number, b: number) => number;
const multiply: MultiplyFunction = (a: number, b: number): number => a * b;
console.log(multiply(2, 1));

/**
 * Function type
 * 임시로 두고 나중에 할당할 때 사용
 */
let temp: Function;
