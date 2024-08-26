export default class Overloading {
    default = "Hello";

    /**
     * 기본 문자열 출력 및 반환
     */
    public test(): string;
    /**
     * 문자열 출력 및 반환
     * @param str 내가 사용하려는 문자열
     */
    public test(str?: string): string;
    /**
     * 문자열 일부 출력 및 반환
     *
     * @param str 내가 사용하려는 문자열
     * @param length 출력할 문자열 길이
     *
     * str.length < length 이면 str 출력 및 반환
     */
    public test(str?: string, length?: number): string;
    public test(str?: string, length?: number): string {
        if (str && length) {
            const slice = str.length < length ? str : str.slice(0, length);
            console.log(slice);
            return slice;
        } else if (str) {
            console.log(str);
            return str;
        }

        console.log(this.default);
        return this.default;
    }
}
