import https from "https";

const endpoint = "https://hookb.in/8P0lonZ1LVtpLGKKL2wx"; //misal pakai hookbin
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.log(`Receive data : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Rendi",
  lastName: "Sagala",
});

request.write(body);
request.end();
