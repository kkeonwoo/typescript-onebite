/**
 * 첫번째 사례
 */

function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap('1', 2); // 매개변수 타입이 서로 다른 경우 타입 변수 개수를 늘려야

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
    // data타입 튜플, 1번째 인자는 받는 거, 나머진 그냥 알아서 rest 파라미터
    return data[0];
}

let num = returnFirstValue([0, 1, 2]); // 0
let str = returnFirstValue([0, 'hello', 'mynameis']); // 'hello'

/**
 * 세번째 사례
 */

function getLength<T extends {length: number}>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength('12345'); // 5
let var3 = getLength({length: 10}); // 10

// let var4 = getLength(10); // length 프로퍼티가 없는 건 제한
