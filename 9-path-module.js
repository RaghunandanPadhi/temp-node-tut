const path = require('path')
console.log(path.sep) // path-Separaotr

const filePath = path.join('/content','subfolder','test.txt') // Join a sequence of files/folders to create a path
console.log(filePath)

const base = path.basename(filePath)
console.log(base) // Here the lastone test.txt is the base

// Accept a sequence of folders/files and resolves it to an ABSOLUTE-PATH
const absolutePath = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolutePath)  // __dirname will be different for different machines

