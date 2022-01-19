import net from "net";

//net untuk server
const server = net.createServer((client) => {
  console.log(`Client connected`);

  client.addListener("data", (data) => {
    console.log(`Receive data ${data.toString()}`);
    client.write(`Hello this is your data : ${data.toString()}\r\n`); //\r\n sebagai enter
  });
});

// servername.listen(port,hostname)
server.listen(3000, "localhost");

//untuk client nya bisa ke net-client.mjs
