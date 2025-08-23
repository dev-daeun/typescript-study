enum Role {
    ADMIN,
    USER,
    GUEST,
};

enum Lang {
    KOREAN = "ko",
    ENGLISH = "en",
}

let user1 = {
    name: "김다은",
    role: Role.ADMIN,
    lang: Lang.KOREAN,
}
console.log(user1.role, user1.lang);  // 0 ko



let user2 = {
    name: "자두",
    role: Role.USER,
    lang: Lang.KOREAN,
}
console.log(user2.role, user2.lang); // 1 ko


let user3 = {
    name: "감자",
    role: Role.GUEST,
    lang: Lang.ENGLISH,
}
console.log(user3.role, user3.lang);  // 2 en