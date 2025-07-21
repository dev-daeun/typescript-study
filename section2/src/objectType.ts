// 객체의 타입 선언하기 (aka. 구조적 타입 시스템, property based type system)
let user1: {
    name: string,
    age: number,
} = {
    name: "자두",
    age: 9,
}
console.log(`${user1.name} ${user1.age}`);

let dog1: {
    name: string,
    color: string
} = {
    name: "공주",
    color: "black"
};
console.log(`${dog1.name} ${dog1.color}`);

// optional 속성 타입 선언하기
let user2: {
    id?: number,
    name: string,
} = {
    name: "홍길동"
}
console.log(user2.id); // undefined


// 변경 불가한 속성 정의하기
let config: {
    readonly apikey: string,
} = {
    apikey: "this is api key"
};
// config.apikey = "hack"; // TS2540: Cannot assign to 'apikey' because it is a read-only property.