console.log("Hello :D");

let formElement = document.querySelector(".js-form");
let fromCurrency = document.querySelector(".js-fromCurrency");
let toCurrency = document.querySelector(".js-toCurrency");
let inputAmount = document.querySelector(".js-inputAmount");
let currencyResult = document.querySelector(".js-result");

let ratePLN_EUR = 0.21;
let ratePLN_USD = 0.23;
let ratePLN_GBP = 0.19;
let ratePLN_JPY = 30.7;

let rateEUR_PLN = 4.69;
let rateEUR_USD = 1.07;
let rateEUR_GBP = 0.89;
let rateEUR_JPY = 143.85;

let rateUSD_PLN = 4.43;
let rateUSD_EUR = 0.95;
let rateUSD_GBP = 0.84;
let rateUSD_JPY = 136.15;

let rateGBP_PLN = 5.27;
let rateGBP_EUR = 1.12;
let rateGBP_USD = 1.18;
let rateGBP_JPY = 161.75;

let rateJPY_PLN = 0.033;
let rateJPY_EUR = 0.007;
let rateJPY_USD = 0.0073;
let rateJPY_GBP = 0.0062;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +inputAmount.value;
  let result = 0;

  switch (fromCurrency.value) {
    case "PLN":
      switch (toCurrency.value) {
        case "EUR": {
          result = amount * ratePLN_EUR;
          break;
        }

        case "USD": {
          result = amount * ratePLN_USD;
          break;
        }

        case "GBP": {
          result = amount * ratePLN_GBP;
          break;
        }

        case "JPY": {
          result = amount * ratePLN_JPY;
          break;
        }

        default: {
          result = amount * 1;
          break;
        }
      }
      break;

    case "EUR":
      switch (toCurrency.value) {
        case "PLN": {
          result = amount * rateEUR_PLN;
          break;
        }

        case "USD": {
          result = amount * rateEUR_USD;
          break;
        }

        case "GBP": {
          result = amount * rateEUR_GBP;
          break;
        }

        case "JPY": {
          result = amount * rateEUR_JPY;
          break;
        }

        default: {
          result = amount * 1;
          break;
        }
      }
      break;

    case "USD":
      switch (toCurrency.value) {
        case "PLN": {
          result = amount * rateUSD_PLN;
          break;
        }

        case "EUR": {
          result = amount * rateUSD_EUR;
          break;
        }

        case "GBP": {
          result = amount * rateUSD_GBP;
          break;
        }

        case "JPY": {
          result = amount * rateUSD_JPY;
          break;
        }

        default: {
          result = amount * 1;
          break;
        }
      }
      break;

    case "GBP":
      switch (toCurrency.value) {
        case "PLN": {
          result = amount * rateGBP_PLN;
          break;
        }

        case "EUR": {
          result = amount * rateGBP_EUR;
          break;
        }

        case "USD": {
          result = amount * rateGBP_USD;
          break;
        }

        case "JPY": {
          result = amount * rateGBP_JPY;
          break;
        }

        default: {
          result = amount * 1;
          break;
        }
      }
      break;

    case "JPY":
      switch (toCurrency.value) {
        case "PLN": {
          result = amount * rateJPY_PLN;
          break;
        }

        case "EUR": {
          result = amount * rateJPY_EUR;
          break;
        }

        case "USD": {
          result = amount * rateJPY_USD;
          break;
        }

        case "GBP": {
          result = amount * rateJPY_GBP;
          break;
        }

        default: {
          result = amount * 1;
          break;
        }
      }
      break;
  }

  currencyResult.innerText = `${amount} ${fromCurrency.value} = 
  ${result.toFixed(2)} ${toCurrency.value}`;
});

formElement.addEventListener("reset", () => {
  currencyResult.innerText = "0.00";
});