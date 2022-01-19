// versi callback

/* setInterval(() => {
  console.log(`Start time at ${new Date()}`);
}, 1000); */

//versi promise
import timers from "timers/promises";

console.log(new Date());
/* const showName = await timers.setTimeout(
  5000,
  `setiap 5 detik akan muncul kata2 ini`
); */
for await (const showName of timers.setInterval(5000, "")) {
  console.log(`setiap 5 detik muncul kata2 ini`);
}
console.log(new Date());

console.log(showName);
