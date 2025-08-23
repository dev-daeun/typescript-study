// number
let num1 = 123;
let num2 = -123;
let num3 = -0.123;
let num4 = 0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
console.log(num4.toFixed(2));
// string
let str1 = "hello";
let str2 = 'hello';
let str3 = `hello`;
let str4 = `hello ${num1}`;
console.log(str4);
// boolean
let bool1 = true;
let bool2 = false;
// null
let nul1 = null;
// tsconfig.json 에 strictNullChecks: false 설정 시 아래와 같이 변수 정의 가능
let n = null;
let s = null;
// undefined
let unde1 = undefined;
// literal : 타입과 동일한 값 외에 재정의 불가 
let ten = 10;
export {};
