// 인터페이스로 함수를 타이핑하는 사례
interface Func {
    (x: number, y: number): number;
}
const add: Func = (x, y) => x + y


// 인터페이스로 배열을 타이핑하는 사례
interface Arr {
    length: number;
    [key: number]: string;  // 인덱스 시그니쳐로 배열의 원소들은 모두 스트링 타입임을 명시
}
const arr: Arr = ["3", "5", "#"]


// 타입스크립트에서 객체의 속성 키(ex. 배열의 'length') 어노테이션 가능한 타입: string, symbol, number
// 타입스크립트에서 어노테이션 된 number, symbol, string 타입의 속성 키는 자바스크립트에서 string 으로 변환 됨



// 인터페이스 선언 병합 : 동일한 이름의 여러 인터페이스를 하나로 합칠 수 있다
interface Person {
    name: string
}

interface Person {
    age: number
}

const p1: Person = {
    name: "김다은",
    age: 32
}

/* 그런데 아래와 같이는 안됨
const p2: Person = {
    name: "김다은"  // age 속성 없음
}
const p3: Person = {
    age: 32   // name 속성
}
*/


// 네임스페이스로 내가 원하는 인터페이스끼리만 병합 가능
interface Creature {
    age: number;
}

namespace Animal {
    export interface C extends Creature {
        sound: string;
    }
}

namespace Plant {
    export interface C extends Creature {
        hasRoot: boolean
    }
}

const a: Animal.C = {
    age: 3,
    sound: "Meow"
}

const p: Plant.C = {
    age: 800,
    hasRoot: true,
}


// 네임스페이스 내부에 값이 존재하면 객체로 사용 가능
namespace Ex {
    export const a = "hello"
}
const e1 = Ex
console.log(e1)  // { a: 'hello' }

const e2 = Ex.a
console.log(e2)  // hello

const e3 = Ex["a"]
console.log(e3)  // hello
