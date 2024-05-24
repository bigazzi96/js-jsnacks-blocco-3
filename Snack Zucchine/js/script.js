// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// Dividi in due array separati le zucchine che misurano meno o più di 8cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
    {
        varietà: 'varietà1',
        peso: '80',
        lunghezza: 6,
    },
    {
        varietà: 'varietà2',
        peso: '40',
        lunghezza: 8,
    },
    {
        varietà: 'varietà3',
        peso: '58',
        lunghezza: 3,
    },
    {
        varietà: 'varietà4',
        peso: '67',
        lunghezza: 14,
    },
    {
        varietà: 'varietà5',
        peso: '87',
        lunghezza: 18,
    },
    {
        varietà: 'varietà6',
        peso: '64',
        lunghezza: 10,
    },
    {
        varietà: 'varietà7',
        peso: '76',
        lunghezza: 5,
    },
    {
        varietà: 'varietà8',
        peso: '90',
        lunghezza: 14,
    },
    {
        varietà: 'varietà9',
        peso: '20',
        lunghezza: 9,
    },
    {
        varietà: 'varietà10',
        peso: '50',
        lunghezza: 10,
    }
];


//* prima richiesta
let pesoTotale = 0;

zucchine.forEach(zucchina => {
    pesoTotale += parseInt(zucchina.peso);
});

console.log(pesoTotale);


//*
const zucchinePiccole = zucchine.filter(zucchina => zucchina.lunghezza <= 8);
console.log(zucchinePiccole)