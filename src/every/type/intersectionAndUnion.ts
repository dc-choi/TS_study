interface INumber {
    value: number;
}

interface IString {
    data: string;
}

/**
 * Union type
 */
function printSome(param: INumber | IString) {
    if ("value" in param) console.log(param.value);
    if ("data" in param) console.log(param.data);
}
printSome({ value: 123 });
printSome({ data: "hello" });

/**
 * Intersection type
 */
function printSome2(param: INumber & IString) {
    console.log(param);
}
printSome2({
    data: "hello",
    value: 123,
});
