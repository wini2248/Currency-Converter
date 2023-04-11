{
  console.log("Hello :D");

  const calculateResult = (amount, fromCurrencyEL, toCurrencyEL) => {
    const ratePLN_EUR = 0.21;
    const ratePLN_USD = 0.23;
    const ratePLN_GBP = 0.19;
    const ratePLN_JPY = 30.7;

    const rateEUR_PLN = 4.69;
    const rateEUR_USD = 1.07;
    const rateEUR_GBP = 0.89;
    const rateEUR_JPY = 143.85;

    const rateUSD_PLN = 4.43;
    const rateUSD_EUR = 0.95;
    const rateUSD_GBP = 0.84;
    const rateUSD_JPY = 136.15;

    const rateGBP_PLN = 5.27;
    const rateGBP_EUR = 1.12;
    const rateGBP_USD = 1.18;
    const rateGBP_JPY = 161.75;

    const rateJPY_PLN = 0.033;
    const rateJPY_EUR = 0.007;
    const rateJPY_USD = 0.0073;
    const rateJPY_GBP = 0.0062;

    switch (fromCurrencyEL) {
      case "PLN":
        switch (toCurrencyEL) {
          case "EUR": return amount * ratePLN_EUR;
          case "USD": return amount * ratePLN_USD;
          case "GBP": return amount * ratePLN_GBP;
          case "JPY": return amount * ratePLN_JPY;
          default: return amount * 1;
        }

      case "EUR":
        switch (toCurrencyEL) {
          case "PLN": return amount * rateEUR_PLN;
          case "USD": return amount * rateEUR_USD;
          case "GBP": return amount * rateEUR_GBP;
          case "JPY": return amount * rateEUR_JPY;
          default: return amount * 1;
        }

      case "USD":
        switch (toCurrencyEL) {
          case "PLN": return amount * rateUSD_PLN;
          case "EUR": return amount * rateUSD_EUR;
          case "GBP": return amount * rateUSD_GBP;
          case "JPY": return amount * rateUSD_JPY;
          default: return amount * 1;
        }

      case "GBP":
        switch (toCurrencyEL) {
          case "PLN": return amount * rateGBP_PLN;
          case "EUR": return amount * rateGBP_EUR;
          case "USD": return amount * rateGBP_USD;
          case "JPY": return amount * rateGBP_JPY;
          default: return amount * 1;
        }

      case "JPY":
        switch (toCurrencyEL) {
          case "PLN": return amount * rateJPY_PLN;
          case "EUR": return amount * rateJPY_EUR;
          case "USD": return amount * rateJPY_USD;
          case "GBP": return amount * rateJPY_GBP;
          default: return amount * 1;
        }
    }
  };

  const updateResultText = (amount, result, fromCurrencyEL, toCurrencyEL) => {
    const currencyResult = document.querySelector(".js-result");
    currencyResult.innerText = `${amount.toFixed(2)} ${fromCurrencyEL} = ${result.toFixed(2)} ${toCurrencyEL}`;
  }

  const onFormSubmit = (event) => {
      event.preventDefault();
    
      const fromCurrency = document.querySelector(".js-fromCurrency");
      const toCurrency = document.querySelector(".js-toCurrency");
      const inputAmount = document.querySelector(".js-inputAmount");
  
      const amount = +inputAmount.value;
      const fromCurrencyEL = fromCurrency.value;
      const toCurrencyEL = toCurrency.value;
  
      let result = calculateResult(amount, fromCurrencyEL, toCurrencyEL);
  
      updateResultText(amount, result, fromCurrencyEL, toCurrencyEL);
  }

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);

    formElement.addEventListener("reset", () => {
      currencyResult.innerText = "0.00";
      console.clear();
    }
  )};


  init();
}
