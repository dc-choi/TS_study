import { ICal } from "./cal";

export class Cal implements ICal {
    public add(a: number, b: number): number {
        return a + b;
    }

    public sub(a: number, b: number): number {
        return a - b;
    }

    public mul(a: number, b: number): number {
        return a * b;
    }

    public div(a: number, b: number): number {
        return a / b;
    }
}
