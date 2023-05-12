import { season, temperature } from './named-exports.mjs'
import { isRaining, humidity } from './inline-exports.mjs'

//Можно назвать как угодно
import newValueOtherName from './export-default.mjs'

console.log(season, temperature)
console.log(isRaining, humidity)
console.log(newValueOtherName)
