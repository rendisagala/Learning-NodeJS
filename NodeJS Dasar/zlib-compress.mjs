import fs from "fs";
import zlib from "zlib";

//zlibc compress
//synchronous
const source = fs.readFileSync("NodeJS Dasar/zlib-compress.mjs");
const result = zlib.gzipSync(source);

// console.log(result.toString()); //default filenya berupa buffer

fs.writeFileSync("NODEJS Dasar/zlib-compress.mjs.txt", result);
