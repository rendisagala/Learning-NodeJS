import fs from "fs";
import zlib from "zlib";

//zlibc decompress
//synchronous
const source = fs.readFileSync("NodeJS Dasar/zlib-compress.mjs.txt");
const result = zlib.unzipSync(source);

fs.writeFileSync("NODEJS Dasar/zlib-decompress.mjs.txt", result);
