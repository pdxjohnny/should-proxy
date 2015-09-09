#should-proxy

Usage
---

```javascript
var shouldProxy = require('should-proxy');

var result = shouldProxy("http://something.google.com/", {
  no_proxy: "google.com"
});
console.log("http://something.google.com/", result);

result = shouldProxy("http://localhost/", {
  no_proxy: ""
});
console.log("http://localhost/", result);
```
