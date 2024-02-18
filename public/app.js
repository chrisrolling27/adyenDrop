const configuration = {
    environment: 'test', 
    clientKey: 'test_25QIQHWAVFGWJI2NW5TRW52GHARI22RA', 
    analytics: {
      enabled: true 
    },
    session: {
    //  id: 'CSD9CAC3', 
    //  sessionData: '' 
    },
    onPaymentCompleted: (result, component) => {
        console.info(result, component);
    },
    onError: (error, component) => {
        console.error(error.name, error.message, error.stack, component);
    },
    // Any payment method specific configuration. Find the configuration specific to each payment method:  https://docs.adyen.com/payment-methods
    // For example, this is 3D Secure configuration for cards:
    paymentMethodsConfiguration: {
      card: {
        hasHolderName: true,
        holderNameRequired: true,
        billingAddressRequired: true
      }
    }
  };


  document.getElementById("startSessionBtn").addEventListener("click", function() {
    fetch('/startSession', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Process the response data here
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
