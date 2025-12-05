/**
 * 인터페이스의 확장
 */

interface Animal {
    name: string;
    color: string;
}

// 인터페이스는 객체면 타입 별칭이어도 확장이 된다.

interface Dog extends Animal {
    // name: 'hello';
    isBark: boolean;
}

const dog: Dog = {
    name: 'hello',
    // name: '', // 원래 string -> 확장에서 string 리터럴로 확장. 확장 시 서브타입으로 변경은 가능
    color: '',
    isBark: true,
};

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
    name: '',
    color: '',
    isBark: true,
    isScratch: true,
};
