

type MyElement<T> = T extends (infer E)[] ? E : never;
/*
1. T : 제네릭 
2. T extends (infer E)[] ? ----> 제네릭 T가 배열을 상속받는가? 이 때 E 는 배열 내 원소의 타입을 가리킴
3. 삼항연산자의 조건을 만족하면 Element<T> = E (배열의 원소 타입)
4. 삼항연산자의 조건을 만족하지 않으면 Element<T> = never
*/



type Str = MyElement<string[]>  // type Str = string 으로 타입 추론
type NumOrBool = MyElement<(number | boolean)[]>;  // type NumOrBool = number | boolean 으로 타입 추론
type SingleObj = MyElement<number>  // type SingleObj = never 으로 타입 추론 



// 함수의 리턴타입을 추론하기
type MyReturnType<T> = T extends (...args: any) => infer R ? R : any;
/*
1. T: 제네릭
2. 제네릭 T 가 함수를 상속받는가 (함수 타입인가?) 
3. 삼항연산자 조건을 만족하면 ReturnType<T> = R (infer 으로 추론한 리턴타입)
4. 삼항연산자 조건을 만족하지 않으면 ReturnType<T> = any 
*/
type R1 = MyReturnType<(a: number, b: number) => number>  // type R1 = number 으로 추론
type R2 = MyReturnType<(a: string) => string>  // type R2 = string 으로 추론
