/* Snack 1:
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e
peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

/* let parco = [
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


let biciLeggera = parco[0];

for(var i = 0; i < parco.length; i++){

    let bici = parco[i];

    if( bici.peso < biciLeggera.peso){
        biciLeggera = bici;     
    }
}
console.log(biciLeggera);

let {nome,peso} = biciLeggera;
let stampa = document.getElementById('bici').insertAdjacentHTML('beforeend',`<p>${nome} ${peso}</p>`);
 */




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

for(var i = 0; i < squadre.length; i++){

    let squadra = squadre[i];
    
    squadra.punti_fatti = (Math.floor(Math.random()*100));
    squadra.falli_subiti = (Math.floor(Math.random()*50));
    
}

console.log(squadre); 



let newArray = [];

for( i = 0; i < squadre.length; i++){

    let squadra = squadre[i];
    const {
        nome,
        falli_subiti
    } = squadra;
    
    newArray.push({nome,falli_subiti});

}

console.log(newArray);
                                                          
// console.log(risultato);

 
/* Snack 3:
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
 */

const range = (lista,min,max) =>{
    const newArr = lista.filter ((element, index)=>{
        return index >= min && index <= max;
    })
    return newArr
}

var array = ['rosso','verde','blu','giallo','nero','arancio','viola','azzurro'];

const risultato = range(array,1, 3);
console.log(risultato);
