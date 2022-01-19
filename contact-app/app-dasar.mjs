//file system
// import fs from "fs";

//menulistkan string ke file(synchronous)
/* try {
  fs.writeFileSync("test.txt", "Hello World");
} catch (e) {
  console.log(e);
}
 */

/* 
//menulistkan string ke file(asynchronous)
fs.writeFile("data/test.txt", "Hello World secara Asynchronous", (e) => {
  console.log(e);
});
 */

//membaca isi file(synchronous)
/* const readData = fs.readFileSync("test.txt");
console.log(readData.toString()); */

//membaca isi file(asynchronous)
/* fs.readFile("data/test.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
}); */

//ReadLine
// import readline from "readline";

/* const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); */

// rl.question(`Input your name :`, (name) => {
//   console.log(`Thank you ${name}, have a great day!`);
//   rl.close;
// });

/* rl.question(`Please input your name :`, (name) => {
  console.log(`Thank you ${name}, welcome to my console`);
  rl.question(`Please input your phone number :`, (phoneNumber) => {
    console.log(
      `Thank you, your phone number is ${phoneNumber}. Have a great day!`
    );
    rl.close;
  });
}); */

//PENERAPAN
import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Please input your name :`, (name) => {
  console.log(`Thank you ${name}, welcome to my console`);
  rl.question(`Please input your phone number :`, (phoneNumber) => {
    console.log(`Your phone number is ${phoneNumber}. Have a great day!`);
    const contact = { name, phoneNumber };
    const file = fs.readFileSync("data/contacts-dasar.json", "utf-8");
    const fileToJSON = JSON.parse(file);

    fileToJSON.push(contact);

    try {
      fs.writeFileSync("data/contacts-dasar.json", JSON.stringify(fileToJSON));
    } catch (error) {
      console.error(`Invalid input, ${xerror}`);
    }
    rl.close();
  });
});
