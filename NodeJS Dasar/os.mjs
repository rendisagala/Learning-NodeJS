import os from "os";

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.uptime());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.networkInterfaces());

console.table(os.cpus());
