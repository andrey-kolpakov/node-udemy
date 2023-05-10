const myName = 'Andrey'
const myHobbies = ['coding', 'gym']
const myFavNumber = 574

console.log('Text from the multiple-export CommonJs Module')

exports.myName = myName
module.exports.myHobbies = myHobbies
module.exports.myFavNumber = myFavNumber

