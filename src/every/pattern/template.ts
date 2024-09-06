/**
 * Template
 *
 * 부모 클래스에서 알고리즘의 구조를 정의하지만 변경하지 않고
 * 자식 클래스들이 알고리즘의 특정 단계를 오버라이드할 수 있도록 함.
 *
 * 회사 문서들을 분석하는 데이터 마이닝 앱을 만들고 있다고 가정했을 때,
 * 다양한 데이터 형식들을 처리하는 코드는 클래스마다 완전히 다름.
 * 하지만 데이터 처리 및 분석을 위한 코드는 거의 같음.
 *
 * 알고리즘을 일련의 단계로 나누고 이런 단계를 메서드로 변환한 후
 * abstract 메서드를 통해 자식 클래스에서 구현하도록 함.
 * default 메서드를 통해 자식 클래스에서 구현하지 않아도 되는 메서드도 정의할 수 있음.
 */

abstract class DataETL {
    protected abstract loadData<T extends object>(): T[];
    protected abstract transformData<T extends object, U extends object>(originData: T[]): U[];

    public save<T extends object>(data: T[]): T[] {
        console.log(`Save data: ${JSON.stringify(data)}`);
        return data;
    }

    public process<T extends object, U extends object>(): U[] {
        const data = this.loadData<T>();
        const transformedData = this.transformData<T, U>(data);

        return transformedData;
    }
}

export type CSV = {
    name: string;
};

export type DOCUMENT = {
    name: string;
};

export type Relational = {
    name: string;
};

export class CsvETL extends DataETL {
    protected loadData<CSV>(): CSV[] {
        console.log("Load data from CSV");
        return [];
    }

    protected transformData<CSV, Relational>(originData: CSV[]): Relational[] {
        console.log("Transform data to Relational");

        return originData.reduce((acc: Relational[], cur) => {
            acc.push(cur as unknown as Relational);
            return acc;
        }, []);
    }
}

export class MongoETL extends DataETL {
    protected loadData<JSON>(): JSON[] {
        console.log("Load data from JSON");
        return [];
    }

    protected transformData<JSON, Relational>(originData: JSON[]): Relational[] {
        console.log("Transform data to Relational");

        return originData.reduce((acc: Relational[], cur) => {
            acc.push(cur as unknown as Relational);
            return acc;
        }, []);
    }
}
