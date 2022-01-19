import fs from "fs/promises";

//jika synchronous *dan tidak perlu /promises
// const buffer = fs.readFileSync();

const buffer = await fs.readFile("NodeJS Dasar/file-system.mjs");

console.log(buffer.toString());

fs.writeFile("NodeJS Dasar/temp.txt", "Hello NodeJS");
