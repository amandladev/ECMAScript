// null operator  

const fooo = null ?? 'default'
console.log(fooo)


// optional chaining (to not break the app)

const user = {}
console.log(user?.profile?.email)


// allSettled is a new Promise function that returns a Promise 
// that resolves when all of the passed in Promises resolve or reject.

const promise1 = new Promise((resolve , reject) => reject('error'))
const promise2 = new Promise((resolve , reject) => resolve('aea'))
const promise3 = new Promise((resolve , reject) => resolve('222'))

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response))