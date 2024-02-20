// #region vars 

let nameSurname

let km;

let age;

const price_km = 0.21;

const discountJunior = ((100 - 20) / 100);

const discountSenior = ((100 - 20) / 100);

const priceJunionTag = ("Biglietto Under 18");

const priceSeniorTag = ("Biglietto Over 65");

const priceStandardTag = ("Biglietto Standard");

let trainCarriage; // (Math.floor(Math.random() * 10) + 1); Obtaining a number from 1 to 10

let codeTrip; // (Math.floor(Math.random() * 10000) + 1); Obtaining a number from 1 to 10000

let ticketPrice;

// #endregion

// #region input from html vars


    nameSurname = document.getElementById("nameSurname").value;

    km = document.getElementById("km").value;

    age = document.getElementById("age").value;

console.log(nameSurname);
console.log(km);
console.log(age);

// #endregion

// #region ticketPrice calc

function calc_ticketPrice(ticketPrice) {
    if(age = "Under 18") {
        ticketPrice = Number(km * price_km / discountJunior);
    }
    else if(age = "Over 65") {
        ticketPrice = Number(km * price_km / discountSenior);
    }
    else {
        ticketPrice = Number(km * price_km);
    }
}

// #endregion

