type Person = {
    name: string,
    lang: string,
};

type Cat = {
    name: string,
    breed: string,
};

/* union 타입 */
let c1 : Cat | Person = {
    name: "자두",
    breed: "american shorthair"
}
let c2: Cat | Person = {
    name: "dev-daeun",
    lang: "ko"
}

/* 타입스크립트의 구조적 타이핑에 의하면 아래 c3는 Cat 과 Person 의 교집합 타입 */
let c3: Cat | Person = {
    name: "타이그리스",
    lang: "en",
    breed: "tiger"
}

/*  Cat/Person 에서 요구하는 필드가 없으므로 컴파일 에러
let c4: Cat | Person = {
    name: "무명"
}
*/

let c5: Cat & Person = {
    name: "타이그리스",
    lang: "en",
    breed: "tiger"
}