/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* RISPOSTA 1
const num1 = 10;
const num2 = 15;

if (num1 > num2) {
  alert("Il " + num1 + " è maggiore di " + num2);
  console.log("Il " + num1 + " è maggiore di " + num2);
} else {
  alert("Il " + num2 + " è maggiore di " + num1);
  console.log("Il " + num2 + " è maggiore di " + num1);
}
+/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* RISPOSTA 2
const num1 = 7;

if (num1 === 5) {
  console.log("Il numero indicato è uguale a 5.");
} else {
  console.log("Il numero indicato è diverso da 5.");
}
*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* RISPOSTA 3
const num1 = 20;

if (num1 % 5 == 0) {
  console.log("Il numero indicato è divisibile per 5.");
} else {
  console.log("Purtroppo il numero indicato non è divisibile per 5.");
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
const num1 = 12;
const num2 = 20;

if (num1 === 8 || num2 === 8) {
  console.log("Uno dei due numeri è uguale a 8");
} else if (num1 + num2 === 8) {
  console.log("La somma tra " + num1 + " e " + num2 + "è 8.");
} else {
  console.log("La differenza tra " + num2 + " e " + num1 + " è 8.");
}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* RISPOSTA 5
const product1 = 20;
const product2 = 15;
const product3 = 14;
const product4 = 3;

const shipfees = 10;

let productsubtotal = product1 + product2 + product3 + product4;

console.log("Totale provvisorio del carrello: " + productsubtotal);

if (productsubtotal > 50) {
  console.log(
    `Il suo carrello aderisce all'offerta "Spedizione gratuita" pertanto il totale è ` + productsubtotal + "€."
  );
} else {
  console.log(
    "Purtroppo il suo totale provvisorio è " +
      productsubtotal +
      "€" +
      ", inferiore al minimo previsto per aderire alla spedizione gratuita, la invitiamo ad aggiungere ulteriori articoli oppure a completare l'ordine per un totale compreso di spedizioni di " +
      (productsubtotal + shipfees) +
      "€."
  );
}

*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* RISPOSTA 6
const product1 = 20;
const product2 = 15;
const product3 = 14;
const product4 = 3;
const bfdiscount = 20;

const shipfees = 10;

let productsubtotal = product1 + product2 + product3 + product4;

let discountedsubt = productsubtotal - (productsubtotal * bfdiscount) / 100;

console.log("Totale provvisorio del carrello: " + discountedsubt);

console.log;

if (discountedsubt > 50) {
  console.log(
    `Il suo carrello aderisce all'offerta "Spedizione gratuita" pertanto il totale è ` + discountedsubt + "€."
  );
} else {
  console.log(
    "Purtroppo il suo totale provvisorio è " +
      discountedsubt +
      "€" +
      ", inferiore al minimo previsto per aderire alla spedizione gratuita, la invitiamo ad aggiungere ulteriori articoli oppure a completare l'ordine per un totale compreso di spedizioni di " +
      (discountedsubt + shipfees) +
      "€."
  );
}
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* RISPOSTA 7
const numbers = [63, 26, 44, 1];
numbers.sort();
console.log(numbers);
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
