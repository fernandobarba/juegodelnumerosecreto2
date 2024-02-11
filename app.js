let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeriMaximo = 10;

function asignarUnaFuncion(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarUnaFuncion('p',`Acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarUnaFuncion('p','El numero secreto es menor');
        } else {
            asignarUnaFuncion('p','El numero secreto es mayor');
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeriMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeriMaximo) {
        asignarUnaFuncion ('p','ya se sortearon todos los numeros del juego');
    } else {
    //si el numero gnerado esta incluido en la lsta 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales(){
    asignarUnaFuncion('H1','Juego del numero secreto');
    asignarUnaFuncion('p','ingresa un numero del 1 al 100');
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar el numero aleatorio
    //iniciar el numero de intentos
    condicionesIniciales();
    //deshabilitar el botom de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();