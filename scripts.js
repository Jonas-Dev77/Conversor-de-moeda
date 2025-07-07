
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value .replace(",", "."))
    
    const CurrencyValuetoConvert = document.querySelector(".currency-value-to-convert")
    const CurrencyValueConverted = document.querySelector(".currency-value")

    
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.10

    if(currencySelect.value == "dolar"){
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
}).format(inputCurrencyValue / dolarToday)

    }
    if(currencySelect.value == "euro"){
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

}).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
}).format(inputCurrencyValue / libraToday)
    }

    CurrencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
}).format(inputCurrencyValue)

   }

   function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/Dólar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "libra esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    convertValues()

    console.log(currencySelect.value)



}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click" , convertValues)