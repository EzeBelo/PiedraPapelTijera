//Variables

const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');

const esperarOponente = document.getElementById('esperarOponente');
const jugadaOponente = document.getElementById('jugadaOponente');

const jugadaElegida = document.getElementById('jugadaElegida');

const jugada1 = document.getElementById('jugada1');
const jugada2 = document.getElementById('jugada2');
const jugada3 = document.getElementById('jugada3');

const finJuego = document.getElementById('finJuego');

const reset = document.getElementById('reset');



piedra.addEventListener('click', jugadaPiedra);

papel.addEventListener('click', jugadaPapel);

tijera.addEventListener('click', jugadaTijera);



//Jugadas Nuestras:
setTimeout(()=> {
    jugada1.className = 'animate__animated animate__bounceInLeft jugada 1';
}, 1000);

function jugadaPiedra(){
    jugadaElegida.innerHTML = 'PIEDRA';
    turnoOponente();
};
function jugadaPapel(){
    jugadaElegida.innerHTML = 'PAPEL';
    turnoOponente();
}
function jugadaTijera(){
    jugadaElegida.innerHTML = 'TIJERAS';
    turnoOponente();
};

//------------------- Jugadas oponente -------------------------------

function turnoOponente(){
    jugada1.className = 'jugada 1 animate__animated animate__bounceOutRight';
    setTimeout(() => {jugada1.className = 'no-mostrar'},400);
    setTimeout(() => {
        jugada2.className = 'jugada 2 animate__animated animate__bounceInLeft'},500);
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
    resultadoFinal();
}

function resultadoFinal(){
    if(jugadaElegida.textContent == jugadaOponente.textContent){
        finJuego.innerHTML = 'EMPATE ._.'
    } else if(jugadaElegida.textContent == 'PIEDRA' && jugadaOponente.textContent == 'TIJERA'){
        finJuego.innerHTML = 'GANASTE!!'
    } else if(jugadaElegida.textContent == 'PAPEL' && jugadaOponente.textContent == 'PIEDRA'){
        finJuego.innerHTML = 'GANASTE!!'
    } else if(jugadaElegida.textContent == 'TIJERAS' && jugadaOponente.textContent == 'PAPEL'){
        finJuego.innerHTML = 'GANASTE!!'
    } else {
        finJuego.innerHTML = 'PERDISTE :('
    };
    jugada3.className = 'jugada 3 animate__animated animate__bounceInLeft';

}


function resetear(){
    document.location.reload();
}