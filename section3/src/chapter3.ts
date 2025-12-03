/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: '기린',
    color: 'yellow',
};

let dog: Dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도',
};

animal = dog;
// dog = animal; ❌
// animal이 슈퍼타입
// dog가 서브타입

// animal 객체의 name, color 프로퍼티는 dog도 가지고 있음
// dog의 breed 프로퍼티는 추가 프로퍼티 구조적 타입 시스템 상 animal이 될 수 없음

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: '한입 리액트',
    price: 33000,
    skill: 'react.js',
};

book = programmingBook;
// programmingBook = book

/**
 * 초과 프로퍼티 검사
 * 객체 리터럴을 사용하여 초기화할 때 실제 타입에 정의하지 않은 프로퍼티를 초기화하는 것은 막혀있음
 */

let book2: Book = {
    name: '한입 리액트',
    price: 33000,
    // skill: 'react.js',
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
    name: '한입 리액트',
    price: 33000,
    // skill: 'react.js',
});
func(programmingBook);
