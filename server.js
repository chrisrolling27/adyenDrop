const express = require("express");
const port = 3000;
const { Client, Config, CheckoutAPI } = require("@adyen/api-library");

const app = express();
app.use(express.json());
app.use(express.static('public'));

require("dotenv").config();

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

const client = new Client({
  apiKey: process.env.ADYEN_API_KEY,
  environment: "TEST",
});

const checkout = new CheckoutAPI(client);

app.post("/startSession", async (req, res) => {
  await checkout.PaymentsApi.sessions({
    amount: Math.floor(Math.random() * 100 + 1) * 100,
    returnUrl: "localhost:3001",
    reference: 1,
    countryCode: "US",
    merchantAccount: process.env.ADYEN_MERCHANT_ACCOUNT,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
});
