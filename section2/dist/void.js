/* void 타입 */
/* 주로 리턴 값이 없는 함수의 리턴 타입 어노테이션 할 때 사용 */
function func1() {
    return "hello";
}
function func2() {
    console.log("hello");
}
/* void 타입 변수에 허용하는 값 : undefined, null (이렇게는 잘 안 쓸듯) */
/* tsconfig.json 에 strictTypeChecks: false 지정하면 다른 타입의 값들도 저장 가능하긴 함  */
let a;
a = undefined;
a = null;
// a = 1 // Type 'number' is not assignable to type 'void'
/* 어떤 함수의 리턴 타입이 null, undefined 이려면 null, undefined 를 직접 리턴해야 함 */
function returnNull() {
    return null;
}
;
function returnUndefined() {
    return undefined;
}
;
export {};
