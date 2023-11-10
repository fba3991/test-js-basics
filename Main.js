/* function analizzaTesto(testo) {
    const senzaSpazi = testo.trim();
    const minuscolo = testo.toLowerCase();
    const numeroCaratteri = senzaSpazi.length;
    const contieneJS =minuscolo.includes('si') || minuscolo.includes('javascript');
    const inverti = senzaSpazi.split('').reverse().join('');

    return {
        originale: testo,
        minuscolo: minuscolo,
        senzaSpazi: senzaSpazi,
        numeroCaratteri: numeroCaratteri,
        contieneJS: contieneJS,
        invertita: inverti,
    };
}

const testoInput = " JAVASCRIPT È FANTASTICO ";
const risultato = analizzaTesto(testoInput);
console.log(risultato); */


/* -----------------------------------Esercizio 2-------------------------- */

 /* function riempiArray (numeroElementi, valoreMinimo, valoreMassimo){
    let numeriRandom =[];

    for(let i=0; i<numeroElementi; i++){
        let numeri = Math.floor(Math.random()*(valoreMassimo - valoreMinimo +1 )+valoreMinimo);
        numeriRandom.push(numeri);
        
    }
    return numeriRandom;

const casuali = riempiArray(10, 2, 100);
console.log(casuali );
}
function pariDispari(array) {
    const numConteggio = {
        pari: 0,
        dispari: 0,
    };

    for (let j = 0; j < array.length; j++) {
        if (array[j] % 2 === 0) {
            numConteggio.pari++;
        } else {
            numConteggio.dispari++;
        }
    }

    return numConteggio;
}

const conteggio = pariDispari(casuali);
console.log(conteggio); */

/* /-------------------------------------------* esercizio3------------------------------------------------------------------------ */ 
/* window.addEventListener('load', () => {
    const btn = document.getElementById('bottoneInvio');
    btn.addEventListener('click' )
  });
 */