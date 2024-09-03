// import { logger } from "./logger";
// import "./type/type";
// import "./type/array";
// import "./type/function";
// import "./type/intersectionAndUnion";
// import "./type/generic";
// import "./type/util";
// import "./type/class";
// import "./type/decorator";
// import "./utilize/classDecorator";
import { Adapter } from "./pattern/adapter";
import { NewUser } from "./pattern/builder";
import { Single } from "./pattern/singleton";

// logger("Hello, World!");
console.log(Single.getInstance().getName());

const adapter = new Adapter();
console.log(adapter.addNew(1, 2));
console.log(adapter.subNew(1, 2));

const newUser = new NewUser.Builder().name("John").email("").password("").build();
console.log(newUser);
