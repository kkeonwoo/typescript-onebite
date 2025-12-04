/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
    name: string;
    age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살입니다.
function func(value: number | string | Date | null | Person) {
    value;
    // value.toUpperCase();
    // value.toFixed();
    if (typeof value === 'number') {
        // 타입 가드. 조건에 있는 타입 외는 들어갈 수 없게 함.
        console.log(value.toFixed());
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase());
        // } else if (typeof value === 'object') {
        //     console.log(value.getTime()); // null까지 추가되면 안에 null, object 둘 중 어떤 것일지 알 수 없음
        // }
    } else if (value instanceof Date) {
        // value가 오른쪽 Date 객체냐?
        console.log(value.getTime());
    } else if (value && 'age' in value) {
        // instanceof 우측엔 타입이 오면 안됨. Date는 내장 객체임
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}
