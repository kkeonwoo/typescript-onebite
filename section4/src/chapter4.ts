/**
 * 사용자 정의 타입가드
 */

type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
    // 반환값이 true면 animal은 Cat이다.
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
    if (isDog(animal)) {
        animal;
    } else if ('isScratch' in animal) {
        animal;
    }
}
