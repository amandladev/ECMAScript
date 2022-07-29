// 1
// BEFORE ES6

function newF(name, lastname){
    var name = name || 'John';
    var lastname = lastname || 'Doe';
    console.log(name, lastname);
}

// USING ES6

function newFunction(name = 'John', lastname = 'Doe') {
  console.log(name, lastname)
}

newFunction()
newFunction('Jane', 'reyes')

// 2


const hello = "Hello"
const world = "World"


// USING ES6
const phrase = `${hello} ${world}`

// BEFORE ES6

const phrase2 = hello + ' ' + world

console.log(phrase)

// 3 multiple lines

// USING ES6

let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Lorem ipsum dolor sit amet, consectetur adipisicing elit.`

// BEFORE ES6

let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos, quisquam.\n"
+ "Quisquam, quos, quisquam."



let person = {
    'name': 'John',
    'lastname': 'Doe',
    'age': 30
}

// 4

// USING ES6

let { name, lastname, age } = person

console.log(name, lastname, age)

// BEFORE ES6

console.log(person.name, person.lastname, person.age)


// 5 

let team1 = [
    'sergio', 'antonio', 'juan'
]

let team2 = [
    'jose', 'maria', 'pablo'
]

// USING ES6

let team3 = ['david', ...team1, ...team2]

console.log(team3)
// BEFORE ES6

let team4 = ['david', 'sergio', 'antonio', 'juan', 'jose', 'maria', 'pablo']



//6 

let name2 = 'sergio'

let age2 = 26

// USING ES6

obj = { name2, age2 }

// USING ES5

obj2 = { name : name2, age : age2 }

// 7

const names = [ 
    { name: 'Sergio', age: 26 },
    { name: 'Antonio', age: 27 },
]

// USING ES6
let listofNames1 = names.map(item => console.log(item.name))

// BEFORE ES6
let listofNames = names.map(function(item){
    console.log(item.name)
})