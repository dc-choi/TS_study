/**
 * type과 interface의 차이점
 *
 * 객체의 타입을 정의할 때는 type이 더 사용하기 편하다.
 *
 * Class를 확장하거나 구현할 때는 interface를 사용한다.
 */
type TUser = {
    id: bigint;
    name: string;
    age: number;
};

type TPost = {
    id: bigint;
    title: string;
    content: string;
};

/**
 * type을 활용한 객체 타입 정의 1
 */
type TUserWithTPost = TUser & TPost;

const user: TUserWithTPost = {
    id: 1n,
    name: "Kim",
    age: 20,
    title: "Hello",
    content: "World",
};
console.log(user);

/**
 * type을 활용한 객체 타입 정의 2
 */
const someOne = {
    view: 1000,
    detail: {
        id: 1n,
        name: "Kim",
        age: 20,
    },
};

type TSomeOne = typeof someOne;

const someOne2: TSomeOne = {
    view: 23000,
    detail: {
        id: 100n,
        name: "Choi",
        age: 29,
    },
};
console.log(someOne2);

/**
 * type을 활용한 객체 타입 정의 3
 */
type SomeType = {
    [key in keyof TUser]: string;
};

const someType: SomeType = {
    id: "1",
    name: "Kim",
    age: "20",
};
console.log(someType);

/**
 * interface를 활용한 설계
 */
interface IUser {
    id: bigint;
    name: string;
    age: number;
}

interface IPost {
    id: bigint;
    title: string;
    content: string;
}

interface IUserWithIPost extends IUser, IPost {}

const user2: IUserWithIPost = {
    id: 1n,
    name: "Kim",
    age: 20,
    title: "Hello",
    content: "World",
};
console.log(user2);
