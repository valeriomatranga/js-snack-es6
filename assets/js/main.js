/* Snack 1:
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e
peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

let parco = [
    {
        'nome': 'bottecchia',
        'peso': 6
    },
    {
        'nome': 'montbice',
        'peso': 4
    },
    {
        'nome': 'elettrica',
        'peso': 10
    }
];

let [,{peso}] = parco;

let stampa = document.getElementById('bici');

stampa.insertAdjacentHTML('beforeend',`<p>${peso}</p>`);



/* Snack2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */
