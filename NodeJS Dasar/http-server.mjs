import http from "http";

const server = http.createServer((request, response) => {
  console.log(request.method);
  console.log(request.url);

  //   response.write("Hello HTTP Server");
  //   response.end();

  //bisa dibikin if else juga
  if (request.method === "POST") {
    request.addListener("data", (data) => {
      response.setHeader("Content-Type", "application/json");
      response.write(data);
      response.end();
    });
  } else {
    if (request.url === "/rendi") {
      //misal localhost:3000/rendi
      response.write("Hello Rendi");
    } else {
      response.write("Hello HTTP Server");
    }
    response.end();
  }
});

server.listen(3000);
