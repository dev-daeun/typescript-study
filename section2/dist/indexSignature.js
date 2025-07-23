/* 인덱스 시그니처 : 객체 내 모든 속성 key/value 가 일관된 타입을 가질 때 활용 */
let countryCodes = {
    Korea: "KO",
    UnitedStates: "US",
    UnitedKingdom: "UK",
};
console.log(countryCodes);
let countryNumberCodes = {
    Korea: 510,
    UnitedStates: 840,
    UnitedKingdom: 826,
};
console.log(countryNumberCodes);
let seoulNumber = {
    countryCode: "KO",
    phone_number: "02",
};
let gyeounggiNumber = {
    countryCode: "KO",
    phone_number: "031",
};
// let busanNumber: DomesticPhoneNumber = {
//     phone_number: "051",  Property 'countryCode' is missing in type
// }
console.log(seoulNumber);
console.log(gyeounggiNumber);
export {};
