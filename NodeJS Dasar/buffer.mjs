const buffer = Buffer.from("Rendi Anjuma Sagala");

console.log(buffer);
console.log(buffer.toString());

// biar terbalik
buffer.reverse();
console.log(buffer.toString());

// buffer encoding
const buffer1 = Buffer.from("Rendi Anjuma Sagala", "utf8");

console.log(buffer1.toString());
//kalau mau ubah ke encoding lain
console.log(buffer1.toString("hex"));
console.log(buffer1.toString("base64"));

//dari encoding ke encoding lain
const bufferBase64 = Buffer.from("UmVuZGkgQW5qdW1hIFNhZ2FsYQ==", "base64");
console.log(bufferBase64.toString("utf8"));
