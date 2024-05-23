// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.

const automobili [   
{
    marca: 'ford'
    modello: 'suv'
    alimentazione:'benzina'
},
{
    marca: 'toyota'
    modello: 'berlina'
    alimentazione:'diesel'
},
{
    marca: 'fiat'
    modello: 'familiare'
    alimentazione:'elettrico'
},
{
    marca: 'peugeot'
    modello: 'familiare'
    alimentazione:'metano'
},

{
    marca: 'ford'
    modello: 'suv'
    alimentazione:'benzina'
},
{
    marca: 'toyota'
    modello: 'berlina'
    alimentazione:'diesel'
},
{
    marca: 'fiat'
    modello: 'familiare'
    alimentazione:'elettrico'
},
{
    marca: 'peugeot'
    modello: 'familiare'
    alimentazione:'metano'
},

{
    marca: 'ford'
    modello: 'suv'
    alimentazione:'benzina'
},
{
    marca: 'toyota'
    modello: 'berlina'
    alimentazione:'diesel'
},
{
    marca: 'fiat'
    modello: 'familiare'
    alimentazione:'elettrico'
},
{
    marca: 'peugeot'
    modello: 'familiare'
    alimentazione:'metano'
},

{
    marca: 'ford'
    modello: 'suv'
    alimentazione:'benzina'
},
{
    marca: 'toyota'
    modello: 'berlina'
    alimentazione:'diesel'
},
{
    marca: 'fiat'
    modello: 'familiare'
    alimentazione:'elettrico'
},

];

const automobiliBenzina = automobili.filter(auto => auto.alimentazione === 'benzina');
