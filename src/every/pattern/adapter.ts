export class OldCal {
    add(a: number, b: number) {
        return a + b;
    }

    sub(a: number, b: number) {
        return a - b;
    }
}

export interface NewCal {
    addNew(a: number, b: number): number;
    subNew(a: number, b: number): number;
}

export class Adapter extends OldCal implements NewCal {
    addNew(a: number, b: number) {
        return this.add(a, b);
    }

    subNew(a: number, b: number) {
        return this.sub(a, b);
    }
}
