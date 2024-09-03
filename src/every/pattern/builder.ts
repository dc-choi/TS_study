// @Builder
export class NewUser {
    private _name?: string;
    private _email?: string;
    private _password?: string;

    constructor(name?: string, email?: string, password?: string) {
        this._name = name;
        this._email = email;
        this._password = password;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    static Builder = class {
        private _name?: string;
        private _email?: string;
        private _password?: string;

        name(name: string) {
            this._name = name;
            return this;
        }

        email(email: string) {
            this._email = email;
            return this;
        }

        password(password: string) {
            this._password = password;
            return this;
        }

        build() {
            return new NewUser(this._name, this._email, this._password);
        }
    };
}

// function Builder<T extends { new (...args: any[]): any }>(constructor: T) {
//     const _ = new constructor();
//     const keys = Object.keys(_);

//     const temp = class extends constructor {
//         static Builder = class {
//             constructor() {
//                 for (const key of keys) {
//                     Object.defineProperty(this, key, {
//                         ["_" + key]: {
//                             value: null,
//                             enumerable: true,
//                             writable: true,
//                             configurable: true,
//                         },
//                         [key]: {
//                             value: function (value: any): typeof Builder {
//                                 this["_" + key] = value;
//                                 return this;
//                             },
//                             enumerable: false,
//                             writable: false,
//                             configurable: false,
//                         },
//                     });
//                 }
//             }
//             build() {
//                 return new constructor(...keys.map((key) => this["_" + key]));
//             }
//         };
//     };
//     temp.prototype = Object.create(constructor.prototype);
//     temp.prototype.constructor = constructor;

//     return temp;
// }
