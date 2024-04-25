//function called when the convert button is clicked
document.getElementById('convert').addEventListener('click', function() {
    let fromCurrency = document.getElementById('from-currency').value;
    getConversionRate(fromCurrency);
  });

//function to fetch the conversion rate from the API
  const getConversionRate = async (fromCurrency) => {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/146425cf478f106a91ebd027/latest/${fromCurrency}`);
        if (response.ok) {
            const data = await response.json();
            processConversionRate(data);
        } else {
            console.error('Error:', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
//function to process the conversion rate and display the result
const processConversionRate = (data) => {
    let toCurrency = document.getElementById('to-currency').value;
    let amount = document.getElementById('amount').value;

    const conversionRate = {"USD": data.conversion_rates.USD, "HKD": data.conversion_rates.HKD, "EUR": data.conversion_rates.EUR};
    console.log('Conversion Rate: ', conversionRate);
    document.getElementById('result-text').innerHTML = "You have " + String(amount * conversionRate[toCurrency]) + " " + String(toCurrency) + "!";
    document.getElementById('result-text').style.display = "block";
};