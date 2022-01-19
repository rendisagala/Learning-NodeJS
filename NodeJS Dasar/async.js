function samplePromise() {
  return Promise.resolve("Rendi");
}

async function run() {
  const name = await samplePromise();
  console.log(name);
}

run();
