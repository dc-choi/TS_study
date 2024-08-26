import { EColor, EStatusCode } from "./enum";
import { IPerson } from "./interface";

/**
 * type annotation 타입 주석
 * '변수: 타입', '파라미터: 타입'
 */
const title: string = "Hello, World!";
title
const count: number = 10;
count
const isTrue: boolean = true;
isTrue
const obj: object = {};
obj

const un: unknown = null; // 잘 사용하지 않음 (거의 안씀)
un
const an: any = null; // 모든 타입을 허용
an

const und: undefined = undefined; // 값과 타입으로서도 사용 가능.
und
const imTrue: true = true; // 값과 타입으로서도 사용 가능.
imTrue

/**
 * | or
 * 
 * 하지만 아래 코드는 유지보수가 어려워질 수 있음.
 */
const color: "red" | "blue" | "green" = "red";
color
const statusCode: 200 | 201 | 404 | 500 = 200;
statusCode

/**
 * enum
 * 
 * 그래서 enum을 사용함.
 */
const ec: EColor = EColor.RED;
ec
const es: EStatusCode = EStatusCode.OK;
es

/**
 * interface
 * 
 * 클래스 설계 목적으로 사용, 객체의 타입으로서 사용
 */
const me: IPerson = {
    age: 10,
    gender: "man",
    name: "Mike",
};

console.log(me?.married ?? false); // undefined, false