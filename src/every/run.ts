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
import { ConsoleSubscriber, FileSubscriber, Logging } from "./pattern/obverser";
import { Printer, PrinterProxy } from "./pattern/proxy";
import { Single } from "./pattern/singleton";
import { CSV, CsvETL, DOCUMENT, MongoETL, Relational } from "./pattern/template";

// logger("Hello, World!");
console.log(Single.getInstance().getName());

const adapter = new Adapter();
console.log(adapter.addNew(1, 2));
console.log(adapter.subNew(1, 2));

const newUser = new NewUser.Builder().name("John").email("").password("").build();
console.log(newUser);

const printerProxy = new PrinterProxy(new Printer());
printerProxy.init("Hello, World!");
printerProxy.print("Hello, World!");

const csvEtl = new CsvETL();
csvEtl.save<Relational>(csvEtl.process<CSV, Relational>());

const mongoEtl = new MongoETL();
mongoEtl.save<Relational>(mongoEtl.process<DOCUMENT, Relational>());

const logger = new Logging("");
logger.add(new ConsoleSubscriber());
logger.add(new FileSubscriber());
logger.notify("Hello, World!");
