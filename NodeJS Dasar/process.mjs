import process, { exit } from "process";

process.addListener("exit", (exitCode) => {
  console.log(`NodeJS Exit with Code ${exitCode}`);
});

console.log(process.version);
console.table(process.argv);
console.table(process.report);

process.exit(1);

console.log(`Hello`); //tidak keluar karena sudah di exit

//node process.mjs rendi atau node process.mjs "rendi anjuma sagala"
