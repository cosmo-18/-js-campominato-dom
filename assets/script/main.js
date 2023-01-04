// let Bomb = [];
// let score = 0;

const griglia = document.getElementById('griglia');

function newCella (contatore) {
    // Bomb = [];
    // score = 0;
    const div = document.createElement('div')
    div.setAttribute("id",contatore.toString());
    div.classList.add('cella');
    div.innerHTML = contatore;                                //STAMPA ALTERNATIVA//
    document.getElementById("griglia").appendChild(div);
    return div; 
    
}
// console.log (newCella())

for(let i=0; i<64; i++){
    
    let dato = newCella(i+1);
    //dato.innerHTML= i+1                                       //STAMPA ALTERNATIVA//
    console.log(dato);

    dato. addEventListener('click',function(){

        console.log(risultato);
        risultato.classList.toogle('attiva')
    })



    // function createArray(n) {
    //     for (let i = 0; i < 16; i++) {
    //         let randomBomb = Math.round(Math.random() * (n + 1));
    //         if (Bomb.includes(randomBomb)) {
    //             i--;
    //         } else {
    //             Bomb.push(randomBomb);
    //         }
    //     }
    //     console.log(Bomb);
    // }
}