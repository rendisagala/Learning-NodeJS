import readline from "readline";
import process from "process";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question(`Who is your name?`, (name) => {
  console.log(`Hello ${name}, Welcome`);
  input.close(); //jika tidak ingin digunakan lagi
});
