/**
 * proxy
 *
 * 원래 객체에 대한 접근을 제어하기 위한 객체이다.
 * 요청이 원래 객체에 전달되기 전에 무언가를 수행할 수 있다.
 *
 * 거대한 객체가 있다고 가정을 했을 때 이 객체가 항상 필요하지 않은 경우가 있다.
 *
 * 실제로 필요한 경우에만 원래 객체와 같은 인터페이스로 새 프록시 객체를 생성할 수 있다.
 * 클라이언트로부터 요청을 받으면 이 프록시 객체는 실제 서비스 객체를 생성하고 모든 작업을 위임한다.
 */

// 인터페이스
export interface IPrinter {
    init(data: string): void;
    print(data: string): void;
}

// 실제 객체
export class Printer implements IPrinter {
    init(data: string) {
        console.log(`Printer init: ${data}`);
    }

    print(data: string) {
        console.log(`Printer print: ${data}`);
    }
}

// 프록시 객체
export class PrinterProxy implements IPrinter {
    constructor(private printer: Printer) {}

    init(data: string) {
        if (!this.printer) {
            this.printer = new Printer();
        }
        this.printer.init(data);
    }

    print(data: string) {
        if (!this.printer) {
            this.printer = new Printer();
        }
        this.printer.print(data);
    }
}
