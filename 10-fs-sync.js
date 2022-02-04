const {readFileSync,writeFileSync} = require('fs')    /* Same thing as ===>
                                                            const fs = require('fs');
                                                            fs.readFileSync */
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second)

// we first arg is the FileName, if the file is not there then the file is created and the 2nd arg is the value that will be passe to that file.
// for New file ==> 2nd arg value will be inserted
// for Existing file ==> 2nd arg value will be updated
// optional 3rd arg (an Object)  ===> ex: {flag: 'a'} ---> it will not override the existing text in file.
writeFileSync('./content/result-sync.txt',
              `Here is the result ===>\n${first}\n${second}`,
              {flag: 'a'}
             )

console.log('done with the task')
console.log('starting the Next-task')
  
