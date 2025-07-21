// 원소 타입이 숫자인 배열
let nums1 = [1, 3, 4];
let nums2 = [1, 3, 5]; // generic expression
// 원소 타입이 스트링인 배열
let strs1 = ["hello", "this", "is", "array"];
let strs2 = ["hello", "this", "is", "array"]; // generic expression
// 원소 타입이 불리언인 배열
let bools1 = [true, false];
let bools2 = [true, false]; // generic expression
// 원소 타입이 다양한 배열 -> union 으로 어노테이트
let multi = [1, true, "hello"];
// 2차원 배열의 타입
let doubleArr = [
    [1, 2, 3],
    [4, 5]
];
// 튜플 : 길이와 타입이 고정된 배열 (immutable array)
let tup1 = [1, 2];
let tup2 = [1, "hello", true];
// 주의 : 튜플은 JS 기준으로 리스트와 동일 -> 튜플 대상으로 pop(), push() 가능
tup2.pop();
tup2.push("world");
console.log(tup2); // [ 1, 'hello', 'world' ]
// 튜플의 용도 : 배열 내 원소의 타입과 길이를 일정하게 강제해야 할 때
const users = [
    ["자두", 9],
    ["DaEun", 32],
    // [1, "Gamza"] // type error
];
export {};
