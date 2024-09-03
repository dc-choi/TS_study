export class Single {
    private static instance: Single = new Single("Singleton");

    private constructor(private readonly name: string) {}

    public static getInstance(): Single {
        return Single.instance;
    }

    public getName(): string {
        return this.name;
    }
}
