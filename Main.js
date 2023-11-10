function analizzaTesto(testo) {
  
    const senzaSpazi = testo.trim();
    const minuscolo = testo.toLowerCase();
    const numeroCaratteri = senzaSpazi.length;
    const contieneJS = senzaSpazi.includes('SI') || testo.includes('JavaScript');
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


const testoInput = "JAVASCRIPT È FANTASTICO";
const risultato = analizzaTesto(testoInput);
console.log(risultato);
