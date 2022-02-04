const http = require('http')

const server = http.createServer((req,res)=>{     // req --> Incoming Request
    res.write('Welcome to our Home-Page')         // res --> Outgoing Response (What we are sending back)  
    res.end()  // ending our response
})  

// specify what port our server listening to
server.listen(5000)