/**
 * 함수 타입 정의
 */

// 함수를 설명하기 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는지 이야기
function func(a: number, b: number) {
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 * 주의 1 : 매개변수 기본값과 다른 타입 지정
 * 주의 2 : 매개변수 타입과 다른 값을 전달
 */

function introduce(name = '이건우', tall?: number) {
    // 필수 매개변수는 앞쪽으로
    console.log(`name: ${name}`);
    if (typeof tall === 'number') {
        console.log(`tall: ${tall + 10}`); // ? 로 undefined 일 가능성이 있어서 오류. 좁혀야함
    }
}
introduce('이건우');

function getSum(...rest: [number, number, number]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum(1, 2, 3);
// getSUm(1, 2, 3, 4, 5);
