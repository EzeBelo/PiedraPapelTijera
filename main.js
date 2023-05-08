
// 0: Iniciar el juego
/* alert('Inicia el juego');
alert('Elige tu ataque');

//1: Elegir ataque de jugador 
let playerJugada = prompt('Escribe 0 para piedra, 1 para papel y 2 para tijeras');

if (playerJugada == 0){
    alert('Elegiste Piedra');
} else if (playerJugada == 1){
    alert('Elegiste Papel');
} else if (playerJugada  == 2){
    alert('Elegiste tijeras');
} else{
    alert('Elige una jugada entre 0, 1, o 2')
};
// 2: Elegir ataque ALEATORIO del oponente

let enemyJugada = Math.round(Math.random() * 2);

if (enemyJugada == 0){
    alert('El oponente eligió Piedra');
} else if (enemyJugada == 1){
    alert('El oponente eligió Papel');
} else if (enemyJugada  == 2){
    alert('El oponente eligió tijeras');
}
//3: Mostrar el resultado

if (playerJugada == enemyJugada){
    alert('Empate');
} else if (playerJugada == 0 && enemyJugada == 2){
    alert('Ganaste esta partida');
} else if (playerJugada == 1 && enemyJugada == 0){
    alert('Ganaste esta partida');
} else if (playerJugada == 2 && enemyJugada == 1){
    alert('Ganaste esta partida');
} else {
    alert('Perdiste. Intentalo de nuevo!');
} */


//Variables

const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');

const esperarOponente = document.getElementById('esperarOponente');
const jugadaOponente = document.getElementById('jugadaOponente');

const jugadaElegida = document.getElementById('jugadaElegida');



piedra.addEventListener('click', jugadaPiedra);

papel.addEventListener('click', jugadaPapel);

tijera.addEventListener('click', jugadaTijera);

//Jugadas Nuestras:

function jugadaPiedra(){
    jugadaElegida.innerHTML = 'PIEDRA';
    turnoOponente();
};
function jugadaPapel(){
    jugadaElegida.innerHTML = 'PAPEL';
    turnoOponente();
}
function jugadaTijera(){
    jugadaElegida.innerHTML = 'TIJERA';
    turnoOponente();
};

//------------------- Jugadas oponente -------------------------------

function turnoOponente(){
    esperarOponente.innerHTML = 'La jugada del oponente es...';
    jugadaOponente.innerHTML = '3'
    setTimeout(() => {
        jugadaOponente.innerHTML = '2'}, 1000);
        setTimeout(() => {
            jugadaOponente.innerHTML = '1'}, 2000);
        setTimeout(() => {
        resultadoOp()}, 3000);
        }

const opcionesOp = ["PIEDRA", "PAPEL", "TIJERA"];

function resultadoOp(){
    const aleatorio = opcionesOp[Math.floor(Math.random() * opcionesOp.length)];
    jugadaOponente.innerHTML = aleatorio;
}
