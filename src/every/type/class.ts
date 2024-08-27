class Book {
    /**
     * 접근 제한자
     *
     * @private 자기 자신만 사용 가능
     * @protected 상속받은 자식 클래스에서도 사용 가능
     * @public 어디서든 사용 가능
     */
    // private readonly title: string;

    // constructor(title: string) {
    //     this.title = title;
    // }

    /**
     * 함축된 생성자
     */
    constructor(private readonly title: string) {}

    getTitle() {
        console.log(this.title);
    }
}

const book: Book = new Book("책");
console.log(book.getTitle());
