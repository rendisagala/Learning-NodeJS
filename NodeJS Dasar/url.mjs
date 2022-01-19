import { URL } from "url";

const linkBelajar = new URL(
  "https://www.programmerzamannow.com/belajar?kelas=nodejs"
);

console.log(linkBelajar.toString());
console.log(linkBelajar.href);
console.log(linkBelajar.protocol);
console.log(linkBelajar.host);
console.log(linkBelajar.pathname);
console.log(linkBelajar.searchParams);

//mengubah url

linkBelajar.host = "www.udemy.com/course/nodejs-pemula-sampai-mahir";
linkBelajar.searchParams.append("status", "premium"); //misal

console.log(linkBelajar.toString());
console.log(linkBelajar.href);
console.log(linkBelajar.protocol);
console.log(linkBelajar.host);
console.log(linkBelajar.pathname);
console.log(linkBelajar.searchParams);
