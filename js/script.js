const firstName = 'Giuseppe';
const lastName = 'Lepore';
const email = 'giuseppejoelepore@gmail.com';
const age = 23;

const fullName = firstName + ' ' + lastName;
console.log(fullName);

/* Buongiorno nome cognome,
il tuo indirizzo email e' mail 
e fra dieci anni avrai tot anni
*/

const futureYears = 10;
const futureAge = age + futureYears;

const stringaFinale = `Buongiorno ${firstName} ${lastName},
il tuo indirizzo email e' ${email} 
e fra dieci anni avrai ${futureAge} anni.`;

console.log(stringaFinale);

const stringaFinaleConCalcolo = `Buongiorno ${firstName} ${lastName},
il tuo indirizzo email e' ${email} 
e fra dieci anni avrai ${age + futureYears} anni.`;

console.log(stringaFinaleConCalcolo);

const product = 'Borraccia';
const description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo perferendis recusandae ut cupiditate, quasi quisquam, quo in nulla repellat dicta numquam blanditiis! Atque dolore provident non! Accusantium natus deleniti eius.';
const originalPrice = 15;
const discount = 20;
let discountPrice = originalPrice;

discountPrice *= 1 - discount / 100;
console.log('Prezzo scontato:', discountPrice);
/*
Nome prodotto
Descrizione
Prezzo: € price
Sconto: discount %
Prezzo scontato : ...
*/
console.log(discount / 100); // 0.2
console.log(1 - discount / 100); // 0.8
// Formula per calcolare sconti
// console.log(price * (1 - discount / 100));

// const prezzoScontato = price - (price * discount / 100);
// console.log(prezzoScontato);

const outputProdotto = `
Nome prodotto: ${product.toUpperCase()}
Descrizione: ${description}
Prezzo: € ${originalPrice.toFixed(2)} 
Sconto: ${discount}%
Prezzo scontato : ${discountPrice.toFixed(2)}
`
console.log(outputProdotto);

const lunghezzaDescrizione = description.length;
console.log(lunghezzaDescrizione);

const outputDescrizione = 'La descrizione e\' lunga ' + lunghezzaDescrizione + ' caratteri';
console.log(outputDescrizione);

const etaUtente1 = '31';
const etaUtente2 = 40;
const etaUtente3 = '20';

const sommaEta = parseInt(etaUtente1) + etaUtente2 + parseInt(etaUtente3);
console.log(sommaEta);

const mediaEta = parseInt(sommaEta / 3);
console.log(mediaEta);