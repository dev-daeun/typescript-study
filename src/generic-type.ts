/* 제네릭 함수 */
function func<T>(a: T): T {
    return a  // 매개변수와 리턴 값의 타입 추론
}
let num = func(10);
let str = func("hello");
let bool = func(true);
let tup = func<[number, number, number]>([1, 2, 3])  // 튜플 타입으로 타입 추론


/* 여러 개의 제네릭 타입 변수들을 함수 매개변수로 받기 */
function swap<T, U>(a: T, b: U): [U, T] {
    /*
    a의 제네릭 타입은 T, b의 제네릭 타입은 U
    */
    return [b, a]
}
let swap1 = swap<number, string>(1, "hello")
let swap2 = swap<boolean, number>(true, 1)



/* 제네릭 타입 변수를 원소로 갖는 배열을 매개변수로 받기 */
function getFirstElement<T>(arr: T[]): T {
    return arr[0]
}
let arr1 = getFirstElement<number>([1, 2, 3])
let arr2 = getFirstElement<string>(["hello", "world"])
let arr3 = getFirstElement<boolean>([true, false])

/* 배열 내 원소들의 타입이 서로 다른 경우 */
function getFirstElement2<T, U>(arr: [T, U, ...unknown[]]): [T, U] {
    return [arr[0], arr[1]]
}
let [e1, e2] = getFirstElement2<number, string>([1, "hello", true])


/* "number 타입의 length 속성을 갖는 객체" 라는 타입으로 추론하기 */
function getLength<T extends { length: number }>(obj: T): number {
    return obj.length
}
let len1 = getLength<string>("hello")
let len2 = getLength<number[]>([1, 2, 3])
let len3 = getLength<{ length: number, a: string }>({ length: 10, a: "hello" })
