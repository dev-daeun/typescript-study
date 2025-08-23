/* never */
/* 함수가 리턴을 수행하지 않는 경우 리턴 타입을 never 으로 명시 */
/* 절대 성립할 수 없는 조건이 성립될 경우를 처리해야 할 때 never 사용  */
function func1(): never {
    while (true) {}; // 1. 함수가 영원히 종료되지 않을 경우 리턴 타입을 never 으로 명시
}

function func2(): never {
    throw new Error(); // 2. 함수에서 무조건 예외 발생하는 경우 리턴 타입을 never 으로 명시
}
function func3(p: number|string) {
    if (typeof p == "number") {
        return p;
    }
    else if (typeof p == "string") {
        return p.toString();
    }
    else {
        let unreachable: never = p; // 3. exhaustive type checking 이후 남는 경로 처리하는 경우  
        console.log("unreachable reached", unreachable);
    }
}