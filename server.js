const express = require('express');
const app = express();
const port = 3000; // You can use any port number

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
  

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
  });


app.post('/paymentSession', async (req, res) => {
    // Extracting dynamic values from the request body
    const {
      amountValue, // Amount in minor units
      currency,
      shopperReference,
      reference, // Your order number
      origin, // e.g., "https://www.yourwebsite.com"
      returnUrl, // e.g., "https://www.yourshop.com/checkout/result"
      countryCode,
      shopperLocale,
    } = req.body;
  
    try {
      const sessionResponse = await checkout.paymentSession({
        amount: {
          currency,
          value: amountValue,
        },
        reference,
        shopperReference,
        channel: "Web",
        origin,
        returnUrl,
        countryCode,
        shopperLocale,
        merchantAccount: config.merchantAccount,
        sdkVersion: "1.9.5" // Specify your SDK version here
      });
  
      // Send the response back to the client
      res.json(sessionResponse);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: error.message });
    }
  });
  


