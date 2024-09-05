abstract class BuilderInit {
    static Builder = class<T extends object> {
        [props: string]: any;
        build(): Partial<T> {
            return {} as Partial<T>;
        }
    };
}

@Builder
export class NewUser extends BuilderInit {
    private name?: string;
    private email?: string;
    private password?: string;

    constructor(name?: string, email?: string, password?: string) {
        super();
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    /**
     * 기존 빌더 패턴 구현
     */
    // static Builder = class {
    //     private _name?: string;
    //     private _email?: string;
    //     private _password?: string;
    //
    //     name(name: string) {
    //         this._name = name;
    //         return this;
    //     }
    //
    //     email(email: string) {
    //         this._email = email;
    //         return this;
    //     }
    //
    //     password(password: string) {
    //         this._password = password;
    //         return this;
    //     }
    //
    //     build() {
    //         return new NewUser(this._name, this._email, this._password);
    //     }
    // };
}

function Builder<T extends { new (...args: any[]): any }>(constructor: T) {
    const _ = new constructor();
    const keys = Object.keys(_);

    const temp = class extends constructor {
        static Builder = class {
            private values: { [key: string]: any } = {};

            constructor() {
                for (const key of keys) {
                    Object.defineProperty(this, key, {
                        get: function (this: any) {
                            return this.values[key];
                        },
                        set: function (this: any, value: any) {
                            this.values[key] = value;
                        },
                        enumerable: true,
                        configurable: true,
                    });

                    (this as any)[key] = function (value: any) {
                        this.values[key] = value;
                        return this;
                    };
                }
            }
            build() {
                return new constructor(...keys.map((key) => this.values[key]));
            }
        };
    };
    // temp.prototype = Object.create(constructor.prototype);
    // temp.prototype.constructor = constructor;

    return temp;
}
