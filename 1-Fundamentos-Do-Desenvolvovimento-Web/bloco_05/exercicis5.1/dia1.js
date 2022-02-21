const linhaVerde = document.querySelector("header");
    linhaVerde.style.backgroundColor = "#00b069";
    linhaVerde.style.fontFamily="arial";
    linhaVerde.style.color="#ffffff";
    linhaVerde.style.textAlign="center";

const linhaRoxa = document.querySelectorAll('div')[0];
    linhaRoxa.style.backgroundColor="#a500f3"
const segundalinhaRoxa = document.querySelectorAll('div')[1];
    segundalinhaRoxa.style.backgroundColor="#a500f3"

const terceiraLinhaRoxa = document.querySelectorAll('div')[2];
    terceiraLinhaRoxa.style.backgroundColor="#000000"
const quartalinhaRoxa = document.querySelectorAll('div')[3];
    quartalinhaRoxa.style.backgroundColor="#000000"

const nomesEmBranco = document.querySelectorAll('h3');
    for(let i = 0; i<nomesEmBranco.length; i += 1){
        nomesEmBranco[i].style.color="#ffffff"
}

const primeiraSeção = document.querySelector("section");
    primeiraSeção.style.border="1px solid black";
    primeiraSeção.style.backgroundColor="#ff9f84"
    primeiraSeção.style.width="30%";
    primeiraSeção.style.height="300px";

const segundaSeção = document.querySelectorAll("section")[1];
    segundaSeção.style.border="1px solid black";
    segundaSeção.style.backgroundColor="#f9db5e"
    segundaSeção.style.width="30%";
    segundaSeção.style.height="300px";

const emergencia = document.querySelectorAll('h3');
    for(let index=0; index <emergencia.length; index += 1){
    emergencia[index].style.textAlign="center"
    emergencia[index].style.fontFamily="arial"
    emergencia[index].style.verticalAlign="middle"    
}

const urgentes = document.querySelectorAll('.emergency-tasks div');
    for (let index = 0; index < urgentes.length; index+=1) {
        urgentes[index].style.height="36px"    
}

const nãoUrgentes = document.querySelectorAll('.no-emergency-tasks div');
    for (let index = 0; index < nãoUrgentes.length; index+=1) {
        nãoUrgentes[index].style.height="36px"    
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor="#003533"


const footer1 = document.querySelectorAll('.footer-container div');
footer1[0].style.color="#ffff"
