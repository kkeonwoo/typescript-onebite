/**
 * Unknown 타입
 */

function unknwonExam() {
    // 업캐스팅
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    // 다운캐스팅
    let unknownVar: unknown;

    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/**
 * Never 타입 => 공집합
 */

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    let never1: never = 10;
    let never2: never = 'string';
    let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
    function voidFunc(): void {
        console.log('hi');
        return undefined;
    }

    let voidVar: void = undefined;
}

/**
 * any 타입
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar; // any타입 한정 unknown 타입 다운캐스팅 가능
    undefinedVar = anyVar; // 자신이 다운캐스팅 되는 것도 가능
    // neverVar = anyVar; => 어떤 것도 다운캐스팅 될 수 없음
}
