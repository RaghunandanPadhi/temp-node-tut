const { readFile, writeFile } = require('fs')

console.log('start')
// readFile(PathToFile, EncodingFormat, CallbackFn)
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    //console.log(result)
    const first = result
    // nesting of callbackFn creats CALLBACK-HELL
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        //console.log(result)
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the ASYNC result : ${first} & ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                //console.log(result)
                console.log('done with the task')
            }
        )
    })
})
console.log('starting the Next-task')