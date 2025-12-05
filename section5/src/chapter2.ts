/**
 * 선언 합침
 * 인터페이스는 중복된 이름의 인터페이스 선언 🅾️
 * 프로퍼티가 합쳐짐.
 */

interface Person {
    name: string;
}

interface Person {
    // name: number; 충돌 -> 같은 이름의 프로퍼티에 다른 타입이 들어간 경우 충돌 발생. 서브 타입도 ❌
    age: number;
}

const person: Person = {
    name: '',
    age: 27,
};

/**
 * 모듈 보강
 */

interface Lib {
    // 라이브러리에서 제공하는 인터페이스
    a: number;
    b: number;
}

interface Lib {
    // 추가하고 싶은 프로퍼티
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: 'hello',
};
