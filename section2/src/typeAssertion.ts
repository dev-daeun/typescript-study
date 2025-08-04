/* 타입 단언 =! 타입 캐스팅
   타입 캐스팅: 객체의 타입을 변경하여 런타임에도 영향을 준다. (ex. let n = Number("1") --> 메모리에서 n이 갖는 용량이 달라짐)
   타입 단언: 객체의 타입을 변경하진 않고 TS 컴파일 타임에만 존재한다. 

   - 타입 단언 규칙 -
   let a = val as B 와 같이 a의 타입을 B라고 단언할 때
   val 의 타입은 B의 슈퍼타입이거나 서브타입이어야 함
*/

enum Nation {
    US = "us",
    KO = "ko",
}

let o1 = "us" as Nation  // us 의 타입은 Nation enum 의 슈퍼타입
let o2 = Nation.KO as string  // Nation enum 은 string 의 서브타입



interface Animal {
    name: string;
    species: string;
}
interface Cat extends Animal {
    breed: string;
}
let c1 = {} as Cat
c1.name = "자두"
c1.species = "feline"  // breed 속성을 초기화하지 않아도 타입스크립트에서 컴파일에러 발생하지 않음
console.log(c1)



/* const 단언 */
let config = {
    apiKey: "api-key",
    secretKey: "secretKey"
} as const;    // ==> 객체의 속성 변경 및 삭제 불가

/* config 객체의 const 단언은 아래와 같음 */
let cf: {
    readonly apiKey: string;
    readonly secretKey: string;
} = {
    apiKey: "api-key",
    secretKey: "secretKey"
}

let arr = [1, 2, 3] as const;  // ==> 배열에 원소 push/pop 불가



/* Non Null 단언 */
type Post = {
    title: string;
    author?: string;
}

let p1: Post = {
    title: "제목",
}
console.log(p1.author?.length)  // undefined (optional chaining operator 에 의해)

let p2: Post = {
    title: "제목",
    author: "작성자"
}
console.log(p2.author!.length) // 3 (Non-Null assertion operator 에 의해 p2.author 는 nullable 하지 않다고 단언)