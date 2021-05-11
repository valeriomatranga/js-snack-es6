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

let squadre = [
    {
        'nome': 'palermo',
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': 'cagliari',
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': 'milan',
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': 'fiorentina',
        'punti_fatti': 0,
        'falli_subiti': 0
    },
];

let [{punti_fatti}] = squadre;
let [{falli_subiti}] = squadre;
let [{nome}] = squadre;

function mathRandom (lista,numero1,numero2){
    
    for(var i = 0; i < lista.length; i++){
        
        
        if(numero1 === 0){
            punti_fatti = (Math.floor(Math.random()*100));
            //console.log(punti_fatti);
        }
        
        if( numero2 == 0){
            falli_subiti = (Math.floor(Math.random()*100));
            //console.log(falli_subiti);
        }

        punteggio.push({nome,falli_subiti});

    }
}


let punteggio = [];


mathRandom(squadre,punti_fatti,falli_subiti);


console.log(punteggio);



