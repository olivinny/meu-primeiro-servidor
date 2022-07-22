const http = require("http");
const host = "http://localhost";
const port = 3000;
const stats = require("./pcRamUsage.js");

http
  .createServer((req, res) => {
    let url = req.url;
    if (url === "/") {
      res.end("<h1>working</h1>");
    } else if (url === "/stats") {
      res.end(JSON.stringify(stats, null, 2));
    }
  })
  .listen(3000, () => console.log(`server is running in ${host}:${port}`));
