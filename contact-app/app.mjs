import { writeQuestion, saveContact } from "./contacts.mjs";

const main = async () => {
  const name = await writeQuestion(`Please input your name :`);
  const email = await writeQuestion(`Please input your email :`);
  const phoneNumber = await writeQuestion(`Please input your phone number :`);

  saveContact(name, email, phoneNumber);
};
main();
