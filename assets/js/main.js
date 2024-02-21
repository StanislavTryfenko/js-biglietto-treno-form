
let price_km = Number(0.21);

let discountJunior = Number((100 - 20) / 100);

let discountSenior = Number((100 - 40) / 100);

let priceJunionTag = ("Biglietto Under 18");

let priceSeniorTag = ("Biglietto Over 65");

let priceStandardTag = ("Biglietto Standard");

function addTicket() {
    let nameSurname = document.getElementById("nameSurname");  
    let km = document.getElementById("km").value;  
    let age = document.getElementById("age");

    let table = document.getElementById("listTickets");
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    
    let ticketPrice;
    if(age.value === "Under 18") {
        ticketPrice = Number((km) * (price_km) * Number(discountJunior));
    }
    else if(age.value === "Over 65") {
        ticketPrice = Number(Number(km) * Number(price_km) * Number(discountSenior));
    }
    else if (age.value === "Standard") {
        ticketPrice = Number(Number(km) * Number(price_km));
    }

    let trainCarriage = (Math.floor(Math.random() * 10) + 1);
    let codeTrip = (Math.floor(Math.random() * 10000) + 1);

    cell1.innerHTML = (nameSurname.value);
    cell2.innerHTML = (age.value);
    cell3.innerHTML = (trainCarriage);
    cell4.innerHTML = (codeTrip);
    cell5.innerHTML = (ticketPrice);
}




/* let element_nameSurname = document.getElementById('nameSurname');

element_nameSurname.addEventListener('keydown', HTMLinputs);
                                                                            VERSIONE REATTIVA da Arthur
let element_km = document.getElementById('km');

element_km.addEventListener('keydown', myCalcFunction);
 */