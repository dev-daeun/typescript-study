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


// 일반 사용자만 갖는 속성의 타입
enum Grade {
    BASIC = "basic",
    STANDARD = "standard",
    PREMIUM = "premium"
}

// 백오피스 스태프만 갖는 속성의 타입
enum Permission {
    STAFF = "staff",
    ADMIN = "admin"
}

type User = {
    id: number,
    name: string,
    grade: string,
};

function logBackOfficeUser({id, name, grade}: User & {grade: Permission}) {
    console.log(id, name, grade);
}
let staff = {
    id: 1,
    name: "KDE",
    grade: Permission.STAFF,
};

logBackOfficeUser(staff);
