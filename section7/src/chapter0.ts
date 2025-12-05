/**
 * 제네릭
 * (일반적인, 포괄적인)
 * 종합병원. 어떤 타입이든 반환하는 종합병원 같은 함수
 */

// 제네릭 함수
function func<T>(value: T): T {
    // T : 타입변수
    return value;
}

// T는 함수 호출할때마다 타입이 정해짐
let num = func(10); // 반환값 기준으로 타입 추론 any
let bool = func(true); // any

if (typeof num === 'number') {
    num.toFixed();
}

let arr = func<[number, number, number]>([1, 2, 3]);
