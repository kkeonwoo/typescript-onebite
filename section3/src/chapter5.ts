/**
 * 타입 추론
 * 타입스크립트는 타입을 명시하지 않아도 변수의 타입을 추론함.
 * 하지만, 모든 상황은 아님. (함수의 매개변수는 작성해야함)
 */

let a = 10;

// function func(param) {}
let c = {
    id: 1,
    name: '이건우',
    profile: {
        nickname: 'keonwoo',
    },
    url: ['kkeonwoo.github.com'],
};

let {id, name, profile} = c;
let [one, two, three] = [1, 'hello', true];

function func(message = 'hello') {
    // 매개변수 기본값 기준으로 추론
    return 'hello'; // 반환값 기준으로 추론
}

let d; // any타입
d = 10;
d.toFixed();
d = 'hello';
d.toUpperCase();

/**
 * any 타입 진화
 * 암묵적인 any 타입 -> 변수를 선언하고 아무 값도 할당하지 않은 상태
 * -> 값을 할당하는 순간 값에 따라 타입이 변함 = 진화
 */

const num = 10;
// 상수는 리터럴 타입으로 됨
// ㄴ num: 10

let arr = [1, 'string']; // number | string => union타입
