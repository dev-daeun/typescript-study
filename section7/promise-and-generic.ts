/* 제네릭 클래스로서의 Promise */

// resolve() 으로 넘기는 매개변수의 타입 추론 (reject() 매개변수 타입추론은 안됨. catch 하는 곳에서 타입좁히기 해야됨.)
const promise = new Promise<number>((resolve, reject) => {
    const rand = Math.random() * 10
    if (rand > 5) {
        setTimeout(() => { resolve(rand) }, 1000)
    }
    else {
        setTimeout(() => { reject("error") }, 1000)
    }
})

promise.then((result) => {
    console.log(result * 10)
}).catch((error) => {
    console.error(error)
})


/* 프로미스를 반환하는 함수 타입 정의 */
interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost(): Promise<Post> {  // resolve 으로 넘겨주는 매개변수 타입: Post
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            id: 1,
            title: "title",
            content: "content"
        })
    }, 1000)
  })
}

const postRequest = fetchPost()
postRequest.then((post) => {
    console.log(post.id)
})