const { myName, myHobbies, myFavNumber } = require('./multiple-export.js')
const data = require('./multiple-export.js')

console.log(myName, myHobbies, myFavNumber)
console.log(data)

const item = { name: 'Andrey' }

// console.log(arguments.callee.toString())

//или module.exports.item = item
exports.item = item

exports.printHello = function () {
    console.log('Hello World!')
}

// Это называется экспортом по умолчанию, такие функции импортируются иначе, но тут надо писать именно module.exports, не просто exports
// module.exports = function(){
//     console.log('Hello World!')
// }

// console.log(module)
// console.log(exports)
// console.log(__filename)
// console.log(__dirname)

// console.log('Andrey')

const greeting = require('./my-modules/single-export.js')
greeting(myName)

//myName: myOtherName ПЕРЕИМЕНОВЫВАЕТ myName, полученный через рекуайр в myOtherName
const {
    myName: myOtherName,
    myFriendsName,
} = require('./exports-and-imports.js')


console.log(myOtherName, myFriendsName)

//Может дописать элемент в массив майхоббис из другого модуля потому что массив - это на самом деле объект и этот майхоббис, и тот майхоббис (в другом модуле) - это один и тот же элемент в памяти
myHobbies.push('drinking')

