/**
 * 객체지향 설계의 5원칙 SOLID
 * 1. SRP(Single Responsibility Principle) 단일 책임 원칙
 * 2. OCP(Open Closed Principle) 개방 폐쇄 원칙
 * 3. LSP(Liskov Substitution Principle) 리스코프 치환 원칙
 * 4. ISP(Interface Segregation Principle) 인터페이스 분리 원칙
 * 5. DIP(Dependency Inversion Principle) 의존 역전 원칙
 */

export class Database {
    constructor(
        private readonly URL: string,
        private readonly PORT: number,
        private readonly ID: string,
        private readonly PW: string
    ) {}

    connect() {
        console.log("연결");

        return "연결 후 객체";
    }

    disconnect() {
        console.log("연결 해제");
    }
}

export interface IUser {
    id: bigint;
    name: string;
}

export interface IRepository {
    save(): void;
    findAll(): void;
    findOneById(): void;
    update(): void;
    delete(): void;
}

export interface IRawQuery {
    rawQuery(): void;
}

export abstract class Repository<T> implements IRepository {
    abstract findAll(): T[];
    abstract findOneById(): T;
    abstract save(): T;
    abstract update(): T;
    abstract delete(): T;
}

export abstract class QueryRepository<T> implements IRepository, IRawQuery {
    abstract findAll(): T[];
    abstract findOneById(): T;
    abstract save(): T;
    abstract update(): T;
    abstract delete(): T;
    abstract rawQuery(): T;
}

export class MongoRepository extends Repository<IUser> {
    constructor(private readonly DATABASE: Database) {
        super();
    }

    save() {
        console.log("저장");

        return { id: 1n, name: "John Doe" };
    }

    findAll() {
        console.log("전체 조회");

        return [
            { id: 1n, name: "John Doe" },
            { id: 2n, name: "Jane Doe" },
        ];
    }

    findOneById() {
        console.log("ID로 조회");

        return { id: 1n, name: "John Doe" };
    }

    update() {
        console.log("수정");

        return { id: 1n, name: "John Doe" };
    }

    delete() {
        console.log("삭제");

        return { id: 1n, name: "John Doe" };
    }
}

export class MySQLRepository extends Repository<IUser> {
    constructor(private readonly DATABASE: Database) {
        super();
    }

    save() {
        console.log("저장");

        return { id: 1n, name: "John Doe" };
    }

    findAll() {
        console.log("전체 조회");

        return [
            { id: 1n, name: "John Doe" },
            { id: 2n, name: "Jane Doe" },
        ];
    }

    findOneById() {
        console.log("ID로 조회");

        return { id: 1n, name: "John Doe" };
    }

    update() {
        console.log("수정");

        return { id: 1n, name: "John Doe" };
    }

    delete() {
        console.log("삭제");

        return { id: 1n, name: "John Doe" };
    }
}

export class MySQLQueryRepository extends MySQLRepository implements QueryRepository<IUser> {
    rawQuery() {
        console.log("로우 쿼리");

        return { id: 1n, name: "John Doe" };
    }
}

const mongo = new Database("localhost", 3306, "me", "1234");
const mysql = new Database("localhost", 3306, "me", "1234");

const mongoRepository = new MongoRepository(mongo);
mongoRepository.findAll();

const mySQLRepository = new MySQLRepository(mysql);
mySQLRepository.findAll();

const mySQLQueryRepository = new MySQLQueryRepository(mysql);
mySQLQueryRepository.findAll();
