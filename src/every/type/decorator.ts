/**
 * decorator는 함수다!
 * decorator === function
 *
 * 1. 런타임에서 바로 실행된다.
 * 2. 클래스랑 무조건 같이 쓴다.
 */

class Test {
    constructor(private readonly title: string) {}

    @MyMD
    @MyMethodDecorator()
    @MyMethodDecorator2()
    print() {
        console.log(this.title);
    }
}

/**
 * Method decorator
 */
function MyMD(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    target;
    propertyKey;
    descriptor;

    console.log("my md called");
}

type MyMethodDecorator = { enable: boolean | undefined };
function MyMethodDecorator(param?: MyMethodDecorator) {
    console.log("factory evaluated");

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        param;
        target;
        propertyKey;
        descriptor;

        console.log("called");
    };
}

type MyMethodDecorator2 = { enable: boolean | undefined };
function MyMethodDecorator2(param?: MyMethodDecorator2) {
    console.log("factory 2 evaluated");

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        param;
        target;
        propertyKey;
        descriptor;

        console.log("2 called");
    };
}
