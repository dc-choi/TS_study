const arrrr: number[] = [1, 2, 3, 4];
arrrr.forEach((item) => {
    console.log(item);
});

const arrrr2: Array<number> = [1, 2, 3, 4];
arrrr2.forEach((item) => {
    console.log(item);
});

/**
 * tuple
 * 튜플로 사용하는 경우는 읽기만 가능하게 사용하는 경우가 많음.
 */
const arrrr3: readonly [number, boolean, string, object] = [1, true, "false", {}];
// arrrr3.push("qwer");
arrrr3.forEach((item) => {
    console.log(item);
});
