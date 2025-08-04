/* 타입 단언 =! 타입 캐스팅
   타입 캐스팅: 객체의 타입을 변경하여 런타임에도 영향을 준다. (ex. let n = Number("1") --> 메모리에서 n이 갖는 용량이 달라짐)
   타입 단언: 객체의 타입을 변경하진 않고 TS 컴파일 타임에만 존재한다.

   - 타입 단언 규칙 -
   let a = val as B 와 같이 a의 타입을 B라고 단언할 때
   val 의 타입은 B의 슈퍼타입이거나 서브타입이어야 함
*/
var _a;
var Nation;
(function (Nation) {
    Nation["US"] = "us";
    Nation["KO"] = "ko";
})(Nation || (Nation = {}));
var o1 = "us"; // us 의 타입은 Nation enum 의 슈퍼타입
var o2 = Nation.KO; // Nation enum 은 string 의 서브타입
var c1 = {};
c1.name = "자두";
c1.species = "feline"; // breed 속성을 초기화하지 않아도 타입스크립트에서 컴파일에러 발생하지 않음
console.log(c1);
/* const 단언 */
var config = {
    apiKey: "api-key",
    secretKey: "secretKey"
}; // ==> 객체의 속성 변경 및 삭제 불가
/* config 객체의 const 단언은 아래와 같음 */
var cf = {
    apiKey: "api-key",
    secretKey: "secretKey"
};
var arr = [1, 2, 3]; // ==> 배열에 원소 push/pop 불가
var p1 = {
    title: "제목",
};
console.log((_a = p1.author) === null || _a === void 0 ? void 0 : _a.length); // undefined (optional chaining operator 에 의해)
var p2 = {
    title: "제목",
    author: "작성자"
};
console.log(p2.author.length); // 3 (Non-Null assertion operator 에 의해 p2.author 는 nullable 하지 않다고 단언)
