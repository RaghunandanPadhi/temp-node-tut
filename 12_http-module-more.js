const http = require('http')

const server = http.createServer((req,res)=>{  
    if(req.url === '/'){ // checking if the requested-Url is Homepage (i.e.  '/') --> then only send the response
        res.end('Welcome to our Home-Page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history.')  // send this response if the request-Url is '/about'
    }
    // Default resoponse if the requested-Url is not found
    res.end(
        `<h1>Oops!</h1>
         <p>We can't seem to find the page you are looking for</p>
         <a href="/">back Home</a>
        `
    )
})  

server.listen(5000)