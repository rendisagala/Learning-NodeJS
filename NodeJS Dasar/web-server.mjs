import http from "http";
import fs from "fs";

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const url = req.url;
    if (url === "/about") {
      res.write(`<h1>This is an about page</h1>`);
      res.end();
    } else if (url === "/contact") {
      res.write(`<h1>This is an contact page</h1>`);
      res.end();
    } else {
      fs.readFile("NodeJS Dasar/index.html", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("<h1>Error 404: file not found</h1>");
        } else {
          res.write(data);
        }
        res.end();
      });
    }
  })
  .listen(3000, () => {
    console.log(`Server is listening on port 3000`);
  });
