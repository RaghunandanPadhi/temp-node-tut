// npm   ==> global command, comes with node
// npm --version

// LOCAL dependency   ==> use it only in this particular project
// npm i <packageName>

// GLOBAL dependency  ==> use it in any project
// npm install -g <packageName
// sudo npm install -g <packageName>  (for mac)

// package.json - manifest file (stores important info about project/package)
// manual approach  ==> (create package.json in the root, crete properties etc)
// npm init    ==> (step by step, press Enter to skip)
// npm init -y ==> (everything default)
         // ** if you want to publish a package the name should be unique accross the whole


const _ = require('lodash') // before using external modules you have to download the dependency first

const items = [1, [2,[3,[4]]]]  // a array of arrays (nested arrays)
// load ash can flat a deep array
const newItems = _.flattenDeep(items);
console.log(newItems)
