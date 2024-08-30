const temp2: object = {
    id: 1,
    name: "name",
};

// any나 unknown을 사용하면 밑에서 편하게 사용 가능
const temp3: object = {
    id: 1,
    name: "name",
} as any;

// 위 방법이 번거로우면 아래처럼 사용
const temp4: any = {
    id: 1,
    name: "name",
};

const temp5 = {
    id: 1,
    name: "name",
};

type TData = {
    id: bigint;
    name: string;
};

console.log(temp2);

// 이 부분에서 컴파일 에러 발생
// console.log(temp.id);

// 둘 중 가독성이 좋은 것을 사용할 것.
console.log((temp2 as unknown as TData).id);
console.log((<TData>(<unknown>temp2)).id);

console.log((temp3 as TData).id);
console.log((<TData>temp3).id);

console.log((temp4 as TData).id);
console.log((<TData>temp4).id);

console.log((temp5 as unknown as TData).id);
console.log((<TData>(<unknown>temp5)).id);
