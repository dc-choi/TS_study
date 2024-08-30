// number와 string만 받을 수 있도록 제한
function something<T extends number | string>(param: T) {
    return param;
}
something<number>(1);
something<string>("string");
// something<object>({}); // 컴파일 에러

type Data1 = {
    id: number;
    name: string;
};

type Data2 = {
    city: string;
    phone: string;
};

const Sample = {
    id: 1,
    name: "John",
    city: "Seoul",
    phone: "010-1234-5678",
};

function mergeData<T extends Data1 | Data2, U extends keyof T>(param: T, key: U) {
    return param[key];
}
mergeData<Data1, keyof Data1>({ id: 1, name: "John" }, "id");
mergeData<Data2, keyof Data2>({ city: "seoul", phone: "John" }, "phone");
mergeData<typeof Sample, keyof typeof Sample>(
    {
        id: 1,
        name: "John",
        city: "Seoul",
        phone: "010-1234-5678",
    },
    "id"
);
