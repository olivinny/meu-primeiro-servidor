const http = require("http");

http
  .createServer((req, res) => {
    res.end("<h1>working</h1>");
  })
  .listen(3000, () => console.log("server is running"));
