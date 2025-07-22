type User = {
    id: number,
    name: string,
    birth: string,
    location: string,
    extra?: string, 
}

let user1: User = {
   id: 1,
   name: "김다은",
   birth: "1994-06-26",
   location: "경기도"
}

let user2: User = {
    id: 2,
    name: "자두",
    birth: "2018-08-06",
    location: "경기도"
}

console.log(user1)
console.log(user2)