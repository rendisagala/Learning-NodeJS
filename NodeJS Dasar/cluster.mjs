import cluster from "cluster";
import http from "http";
import os from "os";
import process from "process";

//mengecek apakah clusternya primary
if (cluster.isPrimary) {
  console.log(`primary : ${process.pid}`);
  //jalankan worker
  //   cluster.fork();
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  cluster.addListener("exit", (worker) => {
    console.log(`Worker-${worker.id} is exit`);
    cluster.fork(); //ketika ada worker mati, jalan lagi dengan fork(infinity)
  });
}
//mengecek apakah clusternya worker
if (cluster.isWorker) {
  console.log(`worker : ${process.pid}`);

  //buat http
  const server = http.createServer((request, response) => {
    response.write(`Response from process ${process.pid}`);
    response.end();
    process.exit();
  });

  server.listen(3000);
}
