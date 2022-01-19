import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./NodeJS Dasar/worker.mjs");
const worker2 = new Worker("./NodeJS Dasar/worker.mjs");

//ketika message diterima
worker1.addListener("message", (message) => {
  console.log(`thread ${threadId} receive from worker 1 : ${message}`);
});
worker2.addListener("message", (message) => {
  console.log(`thread ${threadId} receive from worker 2 : ${message}`);
});

worker1.postMessage(10);
worker2.postMessage(10);
