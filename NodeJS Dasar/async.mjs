function samplePromise() {
  return Promise.resolve("Rendi");
}

const name = await samplePromise();
console.log(name);
