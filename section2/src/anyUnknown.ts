let num: number = 10;

/* any */
let anyVar1: any;
let anyVar2: any = () => {
    console.log("hello");
};
anyVar2.toUpperCase();  // 타입스크립트 컴파일 에러는 발생하지 않으나 JS 런타임 에러 발생 


/* unknown */
/* any 와의 차이점 : 타입스크립트 컴파일 단계에서 검증 가능 & 타입 정제를 요구한다 -> any 에 비해 안전함 */
let unknownVar: unknown;
unknownVar = 10;
unknownVar = () => {
    console.log("world");
};

// num = unknownVar;  // Type 'unknown' is not assignable to type 'number'
// unknownVar.toUpperCase()  // Property 'toUpperCase' does not exist on type 'unknown'.ts(2339)

/* 타입 정제 */
if (typeof unknownVar == "number") { 
    console.log("this is number");
}
else if (typeof unknownVar == "function") {
    console.log("this is function");
}