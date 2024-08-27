type keys = "name" | "age" | "email";

interface IUser {
    name: string;
    age: number;
    email?: string;
}
/**
 * 모든 속성이 선택적인 타입
 */
type partialUser = Partial<IUser>;

/**
 * 모든 속성이 필수인 타입
 */
type requiredUser = Required<IUser>;

/**
 * 특정 키를 제외한 타입
 */
type excludeUser = Exclude<keys, "email">;

/**
 * 특정 키만 포함한 타입
 */
type extractUser = Extract<keys, "name" | "age">;

/**
 * 특정 키, 값을 제외한 타입
 */
type omitUser = Omit<IUser, "email">;

/**
 * 특정 키, 값만 포함한 타입
 */
type pickUser = Pick<IUser, "name" | "age">;

/**
 * 임의의 키와 값으로 이루어진 타입
 */
type recordUser = Record<keys, IUser>;

/**
 * 함수의 반환 타입을 추출하는 타입
 */
type Add2 = (a: number, b: number) => number;
const add2: Add2 = (a, b): number => a + b;
type Add2ReturnType = ReturnType<Add2>;

function some(): number {
    return 10;
}
type Some = ReturnType<typeof some>;
