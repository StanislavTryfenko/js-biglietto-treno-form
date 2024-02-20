# task

Scrivere un programma che chieda all’utente:

Il numero di chilometri da percorrere

Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.
 
# pseudo code

1. Definiamo var utili all'esercizio:

    -nameSurname (obtain from input)
    -km (obtain from input)
    -age (obtain from input)
    -price_1km
    -discountJunion
    -discountSenior 
    -priceJunionTag 
    -priceSeniorTag
    -priceStandardTag
    -trainCarriage //random (no way rn to have a backend)
    -codeTrip  //random (no way rn to have a backend)

2. Calcoliamo il costo del biglietto:

    -IF age<18
        km*price_km*discountJunior

    -ELSE IF age>65
        km*price_km*discountSenior

    ELSE
        km*Price_km

3. Creiamo tasto annulla:

    -event listener click
        cleariamo i campi nome cognome, km da percorrere e fascia d'età
        diamo display none al div "biglietto" (nel caso in cui sia stato precedentemente creato un biglietto)

4. Creiamo tasto genera:

    -event listener click
        assegnamo display block alla table
        aggiungiamo una table row
        inseriamo in td nameSurname
        inseriamo in td "type of price"
        inseriamo in td trainCarriage 
        inseriamo in td codeTrip
        inseriamo in td price

    