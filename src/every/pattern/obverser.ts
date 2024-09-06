/**
 * obverser
 *
 * 여러 객체중 자신이 관찰중인 객체에 발생하는 모든 이벤트 발생에 대해 알리는 구독 매커니즘을 구현함.
 *
 * 매장과 손님이 관계를 예로 들면, 매장의 신제품에 관심 있는 손님과 관심 없는 손님들이 있다.
 * 관심이 있는 손님은 신제품이 나올 때 마다 알림을 받기를 원하고
 * 관심이 없는 손님은 신제품이 나올 때 마다 알림을 받기를 원하지 않는다.
 *
 * observer는 클래스에 개별 객체들이 그 매장으로부터 오는 이벤트들의 알림들을
 * 구독 또는 구독 취소할 수 있도록 구독 메커니즘을 추가할 것을 제안함.
 *
 * 실제로 이 메커니즘은
 * 1) 구독자 객체들에 대한 참조의 리스트를 저장하기 위한 배열 필드와
 * 2) 그 리스트에 구독자들을 추가하거나 제거할 수 있도록 하는 여러 공개된​(public) 메서드들로 구성됩니다.
 */

interface IObserver {
    update(data: string): string;
}

export class ConsoleSubscriber implements IObserver {
    update(data: string): string {
        return `Console: ${data}`;
    }
}

export class FileSubscriber implements IObserver {
    update(data: string): string {
        return `File: ${data}`;
    }
}

abstract class Publisher {
    private observers: IObserver[] = [];

    public add(observer: IObserver): void {
        this.observers.push(observer);
    }

    public remove(observer: IObserver): void {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    public notify(data: string): void {
        this.observers.forEach((observer) => console.log(observer.update(data)));
    }
}

export class Logging extends Publisher {
    constructor(private value: string) {
        super();
    }

    public logging(newValue: string): void {
        this.value = newValue;
        this.notify(this.value);
    }
}
