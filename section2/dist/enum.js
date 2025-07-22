var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
;
var Lang;
(function (Lang) {
    Lang["KOREAN"] = "ko";
    Lang["ENGLISH"] = "en";
})(Lang || (Lang = {}));
let user1 = {
    name: "김다은",
    role: Role.ADMIN,
    lang: Lang.KOREAN,
};
console.log(user1.role, user1.lang); // 0 ko
let user2 = {
    name: "자두",
    role: Role.USER,
    lang: Lang.KOREAN,
};
console.log(user2.role, user2.lang); // 1 ko
let user3 = {
    name: "감자",
    role: Role.GUEST,
    lang: Lang.ENGLISH,
};
console.log(user3.role, user3.lang); // 2 en
export {};
