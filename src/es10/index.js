let array = [ 1, 2, 3, [4, 5, 6, [7, 8, 9, 10]] ]

console.log(array.flat(2))

let array2 = [ 1, 2, 3, 4, 5]

console.log(array2.flatMap(value => [value, value * 2]))

let hello = '      hello'

console.log(hello.trimStart())

let hello2 = 'hello      '

console.log(hello.trimEnd())


// from array to object

let entries = [ ['name', 'Sergio'], ['age', 26] ]
console.log(Object.fromEntries(entries))



