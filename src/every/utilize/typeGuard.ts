type IData1 = {
    type: "one";
    name: string;
    height: number;
    weight: number;
};

type IData2 = {
    type: "two";
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
};

/**
 * 이 부분은 IData1이라는 타입으로 인식한다.
 * 아래는 이 부분을 응용하여 타입 가드를 사용하는 방법이다.
 */
const data: IData1 | IData2 = {
    type: "one",
    name: "name",
    height: 180,
    weight: 80,
};

type IType<T> = {
    type: T;
};

type IPerson = {
    name: string;
    walk(): void;
} & IType<"person">;

type IAnimal = {
    name: string;
    bark(): void;
} & IType<"animal">;

/**
 * this is type guard
 */
function isPerson(param: object): param is IPerson {
    return "name" in param && "walk" in param;
}

/**
 * this is type guard
 */
function isAnimal(param: object): param is IAnimal {
    return "name" in param && "bark" in param;
}

function something(param: IPerson | IAnimal) {
    // if (isPerson(param)) param.walk();
    // if (isAnimal(param)) param.bark();
    switch (param.type) {
        case "person":
            param.walk();
            break;
        case "animal":
            param.bark();
            break;
    }
}
