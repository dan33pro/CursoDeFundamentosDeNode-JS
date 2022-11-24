const os = require('os');

const size = 1024;
function kb(bytes) { return (bytes / size); }
function mb(bytes) { return (kb(bytes) / size); }
function gb(bytes) { return (mb(bytes) / size); }

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus());
console.log(os.constants);
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());
console.log(os.freemem());
console.log(os.totalmem());

console.log(kb(os.freemem()) + ' Kb');
console.log(mb(os.freemem()) + ' Mb');
console.log(gb(os.freemem()) + ' Gb');