import http from "http";

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const url = req.url;
    try {
      if (url === "/about") {
        res.write(`<h1>This is an about page</h1>`);
        res.end();
      } else if (url === "/contact") {
        res.write(`<h1>This is an contact page</h1>`);
        res.end();
      } else {
        res.end();
        res.write(`Hello World!`);
      }
    } catch (e) {
      throw new error();
    }
  })
  .listen(3000, () => {
    console.log(`Server is listening on port 3000`);
  });
