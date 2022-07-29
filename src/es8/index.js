const data = {
    fontend : 'sergio',
    backend : 'antonio',
    design : 'melissa',
}

const entries = Object.entries(data)
console.log(entries)


const values = Object.values(data)
console.log(values)


const string = 'hello'
console.log(string.padStart(7, 'hi_'))
console.log(string.padEnd(12, ' -----'))


const obj = {
    name : 'sergio',
}


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Hello World'), 3000) 
        : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync()

// CORRECT WAY TO USE ASYCN AND AWAIT

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}