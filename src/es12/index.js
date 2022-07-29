const string = "JavaScript es maravilloso, con JavaScript podemos crear el futuro de la web"

//before es12

const replaceString = string.replace("JavaScript", "Java")

//with es12

const replaceString2 = string.replaceAll("JavaScript", "Java")
console.log(replaceString)
console.log(replaceString2)




const promise1 = new Promise((resolve , reject) => reject('error'))
const promise2 = new Promise((resolve , reject) => resolve('aea'))
const promise3 = new Promise((resolve , reject) => resolve('222'))

Promise.any([promise1, promise2, promise3])
.then(value => console.log(value))