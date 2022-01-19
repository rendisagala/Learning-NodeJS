import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//membuat folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//membuat contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const writeQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (data) => {
      resolve(data);
    });
  });
};

const saveContact = (name, email, phoneNumber) => {
  const contact = { name, email, phoneNumber };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const fileToJSON = JSON.parse(file);

  fileToJSON.push(contact);

  try {
    console.log(
      `Hello ${name}, Welcome to my console, Your email is ${email}. Your phone number is ${phoneNumber}. Have a great day!`
    );

    fs.writeFileSync("data/contacts.json", JSON.stringify(fileToJSON));
  } catch (error) {
    console.error(`Invalid input, ${error}`);
  }
  rl.close();
};

export { writeQuestion, saveContact };
