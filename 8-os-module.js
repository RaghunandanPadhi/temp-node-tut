const os = require('os')  // for Built-in module we don't need to write "./moduleName"

// info about Current User
const user = os.userInfo()
console.log('User ===>\n',user)

//method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

// Other os-metthods
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)