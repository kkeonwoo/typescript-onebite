/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
};

// person을 빈 객체로 선언하고 나중에 프로퍼티에 값을 선언하는 상황
// person: Person 시 프로퍼티 값이 없으니 당연히 오류
let person = {} as Person; // 빈 객체를 person으로 단언해. 라는 뜻

// person에 타입을 지정하지 않고 프로퍼티 나중에 추가 -> 이것도 오류
person.name = '이건우';
person.age = 27;

// -> 위 상황일떄 타입 단언 방법 사용

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도', // 초과 프로퍼티 검사 발생
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼 타입이거나
 * A가 B의 서브 타입이어야한다.
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;
let num3 = 10 as unknown as string; // 다중 단언을 하면 가능하긴 함

/**
 * const 단언
 */

let num4 = 10 as const;
// let 으로 선언했지만 const로 선언한 것처럼 여김

let cat = {
    name: '야옹이',
    color: 'yellow',
} as const;

/**
 * Non Null 단언
 */
type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: '게시글1',
    author: '이건우',
};

const len: number = post.author!.length;
// post.author의 값이 null, undefined가 아니라고 알려주는

// 실제 타입을 바꾸는게 아닌 컴파일러의 눈을 속이는 것
