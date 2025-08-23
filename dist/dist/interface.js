var add = function (x, y) { return x + y; };
var arr = ["3", "5", "#"];
var p1 = {
    name: "김다은",
    age: 32
};
var a = {
    age: 3,
    sound: "Meow"
};
var p = {
    age: 800,
    hasRoot: true,
};
// 네임스페이스 내부에 값이 존재하면 객체로 사용 가능
var Ex;
(function (Ex) {
    Ex.a = "hello";
})(Ex || (Ex = {}));
var e1 = Ex;
console.log(e1);
var e2 = Ex.a;
console.log(e2);
var e3 = Ex["a"];
console.log(e3);
