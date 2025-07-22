type CountryCodes = {
    // key 타입: string
    // value 타입: string
    [key: string]: string
}

let countryCodes: CountryCodes = {
    Korea: "KO",
    UnitedStates: "US",
    UnitedKingdom: "UK",
}
console.log(countryCodes);

type CountryNumberCodes = {
    // key 타입: string
    // value 타입: number
    [key: string]: number
}
let countryNumberCodes: CountryNumberCodes = {
    Korea: 510,
    UnitedStates: 840,
    UnitedKingdom: 826,
}
console.log(countryNumberCodes);


type DomesticPhoneNumber = {
    [key: string]: string,
    countryCode: string,  /* 특정 필드가 반드시 있어야 하는 경우 (대신에 인덱스 시그니처에 명시된 value 타입과 일치해야 함) */
};

let seoulNumber: DomesticPhoneNumber = {
    countryCode: "KO",
    phone_number: "02",
};
let gyeounggiNumber: DomesticPhoneNumber = {
    countryCode: "KO",
    phone_number: "031",
};
// let busanNumber: DomesticPhoneNumber = {
//     phone_number: "051",  Property 'countryCode' is missing in type
// }


console.log(seoulNumber);
console.log(gyeounggiNumber);