/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입 존재
 */

/**
 * 1. 합집합 - Union 타입
 * 무한대로 추가 가능
 */

let a: string | number | boolean;
a = 1;
a = 'hello';
a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
    name: '',
    color: '',
};

let union2: Union1 = {
    name: '',
    language: '',
};

let union3: Union1 = {
    name: '',
    color: '',
    language: '',
};

// let union4: Union1 = {
//     name: '',
// };
// union4는 Dog, Person 바깥에 있는 타입으로 분류

/**
 * 2. 교집합 타입 - Intersection 타입
 */
let variable: number & string;
// -> 일반적인 타입을 이용한 intersection 타입을 만들면 거의 다 never타입이 됨. 객체에 사용
type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: '',
    color: '',
    language: '',
};
// 두 객체의 모든 프로퍼티를 다 가지고 있어야 교집합 타입이 됨.
// -> link union3
