// number
let num1: number = 123;
let num2: number = -123;
let num3: number = -0.123;
let num4: number = 0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;
console.log(num4.toFixed(2))

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;
console.log(str4);

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let nul1: null = null;

// tsconfig.json 에 strictNullChecks: false 설정 시 아래와 같이 변수 정의 가능
let n: number = null;
let s: string = null;

// undefined
let unde1: undefined = undefined;

// literal : 타입과 동일한 값 외에 재정의 불가 
let ten: 10 = 10;
