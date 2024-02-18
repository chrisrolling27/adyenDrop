const express = require('express');
const app = express();
const port = 3000; 
require('dotenv').config();
const { Client, CheckoutAPI } = require('@adyen/api-library');

const client = new Client({apiKey: process.env.ADYEN_API_KEY, environment: "TEST"});
const checkout = new CheckoutAPI(client);

const requestOptions = { idempotencyKey: "YOUR_IDEMPOTENCY_KEY" };


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
  

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
  });



  app.post('/startSession', async (req, res) => {

    checkout.session({
        amount: Math.floor(Math.random() * 100 + 1) * 100,
        returnUrl: 'localhost:3001',
        reference: 1,
        countryCode: US,
        merchantAccount: process.env.ADYEN_MERCHANT_ACCOUNT,
    })
    .then((response) => {
        console.log(response);
    })
    .catch((e) => {
        console.log(e);
    });
  });

