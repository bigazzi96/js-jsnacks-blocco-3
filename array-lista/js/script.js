
//* Array con i frutti presenti
const frutti = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];


//* Aggiungi la pesca ai frutti presenti
frutti.push('pesca');



//* cerco se c'è il cocomero nella lista
let cocomero = false;
for (let  frutta of frutti) {
    if (frutta === 'cocomero') {
        cocomero= true;
        
    }
}

//* risulato 
if (cocomero) {
    console.log("Trovato! Devo solo preparare il cocktail.");
} else {
    console.log("Oh no, devo uscire a comprare il cocomero!");
}