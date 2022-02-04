// >>>>>>>>    Module   <<<<<<<<<<<<<<
// Node uses CommonJS library 
// every file in Node is a module (by default)
// Modules - Encapsulated code (only share minimum in export obj)

const names = require('./4-names')
// const {john, peter} = require('./4-names')  ===> Alternatively we can use Object-Destructureing
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') // It will automatically invoke the function even if that is not exported (as the fn has been called there)
// console.log(names)
// console.log(sayHi)
// console.log(data)

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);