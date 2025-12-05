/**
 * 인터페이스
 * 타입에 이름을 지어주는 또 다른 문법
 * + 객체의 구조를 정의하는데 특화된 문법 (상속, 합침 등의 특수한 기능을 제공함)
 */

interface Person {
    readonly name: string;
    age?: number;
    // sayHi: () => void;
    sayHi(): void; // 호출 시그니처 가능
    sayHi(a: number, b: number): void;
    // 함수 오버로딩을 사용하고 싶으면 호출 시그니처 사용해야함
}

const person: Person = {
    name: '이건우',
    sayHi: () => {
        console.log('hello');
    },
};

// person.name = '홍길동'

person.sayHi();
// person.sayHi(1, 2);

// 인터페이스는 유니온, 인터섹션 타입 사용 x, 타입 별칭, 주석에 적어야함
