interface IGeneric<T> {
    value: T;
}

function printSome3<T>(param: IGeneric<T>) {
    console.log(param);
}

printSome3<number>({ value: 1 });
printSome3<string>({ value: "hello" });
printSome3<boolean>({ value: true });
printSome3<undefined>({ value: undefined });
