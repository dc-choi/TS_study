type IsString<T> = T extends string ? string : never;
type IsPhone<T> = T extends `${string}-${string}-${string}` ? string : never;
type IsColor<T> = T extends `#${string}` ? string : never;

const data = "hello world";
const data2 = "010-1234-5678";
type StringResult = IsString<typeof data>;
type PhoneResult = IsPhone<typeof data2>;
type ColorResult = IsColor<"#ffffff">;

type Target = {
    data: {
        value: string;
    };
    message: {
        value: string;
    };
};
type check = { value: string } & { value: string };
type FilterType<T, U> = T extends { [K in keyof T]: U } ? T : never;

type Filtered = FilterType<Target, check>;

const data3 = [1, 2, 3, 4, 5];
type ElementType<T> = T extends (infer U)[] ? U : T;

type ResultElementType = ElementType<typeof data3>;

// 튜플을 검증할 때 readonly를 사용하는 경우 똑같이 readonly를 붙여준다.
const data4: [number, string, boolean] = [1, "hello", true];
type FirstElement<T> = T extends [infer U, ...args: any[]] ? U : never;

type ResultFirstElement = FirstElement<typeof data4>;

function data5(): string {
    return "hello world";
}
const data6 = (): string => "hello world";
type getFunctionReturnType<T> = T extends (...args: any[]) => infer U ? U : never;

type ResultFunctionReturnType = getFunctionReturnType<typeof data5>;
// ts에서 제공하는 ReturnType을 사용하면 된다.
type ResultReturnType = ReturnType<typeof data5>;

type ResultFunctionReturnType2 = getFunctionReturnType<typeof data6>;
// ts에서 제공하는 ReturnType을 사용하면 된다.
type ResultReturnType32 = ReturnType<typeof data6>;
