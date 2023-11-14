/*   function analizzaTesto(testo) {
    const senzaSpazi = testo.trim();
    const minuscolo = testo.toLowerCase();
    const numeroCaratteri = senzaSpazi.length;
    const contieneJS =minuscolo.includes('js') || minuscolo.includes('javascript');
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
console.log(risultato);   */
 
/* const analizzaTesto =  (testo) =>{
    const obj={}
        obj.originale = testo;
        obj.minuscolo = testo.toLowerCase();
        obj.senzaSpazi= testo.trim();
        obj.caratteri = obj.senzaSpazi.length;
        obj.contieneJS= testo.includes('JS') || testo.includes('javascript');
        obj.invertita='';
        for(let i =  testo.length-1; i>=0; i--){
            const char = testo[i];
            obj.invertita+=char;
        }
        
        return obj;
}
const risultato= analizzaTesto(' Javascript ');
console.log(risultato);   */
 
/* -----------------------------------Esercizio 2-------------------------- */

/* function riempiArray (numeroElementi, valoreMinimo, valoreMassimo){
let numeriRandom =[];

for(let i=0; i<numeroElementi; i++){
    let numeri = Math.floor(Math.random()*(valoreMassimo - valoreMinimo +1 )+valoreMinimo);
    numeriRandom.push(numeri);
    
}
return numeriRandom;
}
const casuali = riempiArray(10, 2, 100);
console.log(casuali );

function pariDispari(array) {
let numConteggio = {
    pari: 0,
    dispari: 0,
 
 
 
}

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
console.log(conteggio, casuali);   */

 /* const numeroRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const riempiArray = (numeroElementi, valoreMinimo, valoreMassimo) => {
    const array = [];
    for (let i = 0; i < numeroElementi; i++) {
        const numeriCasuali = numeroRandom(valoreMinimo, valoreMassimo);
        array.push(numeriCasuali)
    }
    return array;

}
const risultato = riempiArray(5, 2, 50);



const contaPariDispari = (array) => {
    const obj = {
        pari: 0,
        dispari: 0
    };
    for (let j = 0; j < array.length; j++) {
        const numero = array[j];
        if (numero % 2 === 0) {
            obj.pari++;
        } else {
            obj.dispari++;
        }
    }
    return obj;
}
const risultato2 = contaPariDispari(risultato);
console.log(risultato, risultato2); */
 
/* /-------------------------------------------* esercizio3------------------------------------------------------------------------ */

/* window.addEventListener('load', () => {
 const bottone = document.getElementById('bottoneInvio');
 bottone.addEventListener('click', () => {
 const input = document.getElementById('testoUtente');
 const valore = input.value;/* valore/testo da inserire nel input */
 
 /* if(valore === ''){
    alert('inserisci del testo prima di inviare ');
 }else{
 const p = document.createElement('p');
  p.innerText= valore;
 document.body.appendChild(p)
 input.value= '';/* mi svuota l'input */
 /* }


 });

}); */ 


/* window.addEventListener('load', () => {
    const bottone = document.getElementById('bottoneInvio');
    bottone.addEventListener('click', () => {
    const input = document.getElementById('testoUtente');
    const valore = input.value;/* valore/testo da inserire nel input */
/*     if(valore === ''){
       alert('inserisci del testo prima di inviare ');
    }else{
    const p = document.createElement('p');
    const testoAnalizzato = analizzaTesto(valore);
    const chiaveValore = Object.entries(testoAnalizzato);/* entries ci ritorna un array di array*/
   /*  const ul = document.createElement('ul');
    for(let i=0; i<chiaveValore.length; i++){
        const coppia= chiaveValore[i];
        const chiave= coppia[0];/* chieve e il primo elemtento dell oggetto cioe la proprieta */
      /*   const valore = coppia[1];/* e il valore della proprieta dell oggeto */
        /* const li = document.createElement('li');
        li.innerText= ` ${chiave}: ${valore}`;
        ul.appendChild(li);
    }
    p.appendChild(ul);
    document.body.appendChild(p)
    input.value= ''; *//* mi svuota l'input */
    } */ */ */
   
   
    });
   
   });
 */


}







