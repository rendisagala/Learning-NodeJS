import fs from "fs";

//tulis kedalam file
const writer = fs.createWriteStream("target.log");

//mengirim data ke target.log
writer.write("Rendi\n");
writer.write("Anjuma\n");
writer.write("Sagala\n");
writer.end();

//baca file
const reader = fs.createReadStream("target.log");
// reader.read();
reader.addListener("data", (data) => {
  console.log(data.toString());
});
