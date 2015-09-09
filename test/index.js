var shouldProxy = require('..');

console.log("http://google.com/",
  shouldProxy("http://google.com/"))
console.log("http://something.google.com/",
  shouldProxy("http://something.google.com/"))
console.log("http://something.internal.com/",
  shouldProxy("http://something.internal.com/"))
console.log("http://192.168.0.1/",
  shouldProxy("http://192.168.0.1/"))
console.log("http://localhost/",
  shouldProxy("http://localhost/"))
