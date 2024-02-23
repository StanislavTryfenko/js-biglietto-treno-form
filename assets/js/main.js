
let price_km = Number(0.21);

let discountJunior = Number((100 - 20) / 100);

let discountSenior = Number((100 - 40) / 100);

function addTicket() {
    let nameSurname = document.getElementById("nameSurname").value;  
    let km = document.getElementById("km").value;  
    let age = document.getElementById("age").value;

    let table = document.getElementById("listTickets");
    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    
    let ticketPrice;
    if(age === "Under 18") {
        ticketPrice = Number((km) * (price_km) * (discountJunior));
    }
    else if(age === "Over 65") {
        ticketPrice = Number((km) * (price_km) * (discountSenior));
    }
    else if (age === "Standard") {
        ticketPrice = Number((km) * (price_km));
    }

    let trainCarriage = (Math.floor(Math.random() * 10) + 1);
    let codeTrip = (Math.floor(Math.random() * 100000) + 1);

    cell1.innerHTML = nameSurname;
    cell2.innerHTML = age;
    cell3.innerHTML = trainCarriage;
    cell4.innerHTML = codeTrip;
    cell5.innerHTML = km;
    cell6.innerHTML = ticketPrice.toFixed(2);
}

// da mettere nel tbody attualmente le cell sono nel thdead basta creare una tbody e metterci l'id




/* let element_nameSurname = document.getElementById('nameSurname');

element_nameSurname.addEventListener('keydown', HTMLinputs);
                                                                            VERSIONE REATTIVA da Arthur
let element_km = document.getElementById('km');

element_km.addEventListener('keydown', myCalcFunction);
 */