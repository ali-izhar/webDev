document.addEventListener('DOMContentLoaded', function() {

document.querySelector('#submit').disabled = true;
document.querySelector('#currency').onkeyup = () => {
    if ((document.querySelector('#currency').value.length > 0) && (document.querySelector('#currency').value.trim() !== '')){
        document.querySelector('#submit').disabled = false;
    }else{
        document.querySelector('#submit').disabled = true;
    }
}
    
 
  document.querySelector('form').onsubmit = function() {
      fetch("https://api.exchangeratesapi.io/latest?base=USD")
      .then(response => response.json())
      .then(data => {
          const currency = document.querySelector('#currency').value.trim().toUpperCase();
          // go to the data > rates key > find me the currency the user typed in
          const rate = data.rates[currency];
          // if the currency is present in the data (if its not undefined)
          if (rate !== undefined) {
              const result = `1 USD = ${rate.toFixed(3)} ${currency}`;
              const back = `1 ${currency} = ${(1/rate).toFixed(3)} USD`;
              document.querySelector('#result').innerHTML = result;
              document.querySelector('#back').innerHTML = back;
              document.querySelector('#currency').value = '';
          } else {
              document.querySelector('#result').innerHTML = 'Invalid currency.';
              document.querySelector('#currency').value = '';
          }

          document.querySelector('#submit').disabled = true;
      })

      .catch(error => {
          console.log('Error:', error);
      });
      // return false, because we don't actually want to submit the form to some other route
      return false;
  }
});

