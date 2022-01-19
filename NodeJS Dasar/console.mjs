import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("console.log");
/* membuat agar console tidak output ke 
terminal melainkan ke file */
const log = new Console({
  stdout: file, //outputnya ke file
  stderr: file,
});

log.info("Hello World");
log.error("Hello World");

const person = {
  firstName: "Rendi",
  lastName: "Sagala",
};

log.table(person);
