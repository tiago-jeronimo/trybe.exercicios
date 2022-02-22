// window.onload = jsCarregado
// function jsCarregado(){
//     alert("PÁGINA CARREGADA!")
// }

function maisInfos(){
    let textoMaisInfo = document.getElementById('trybe-continua');
    textoMaisInfo.innerText="AQUI VOCÊ ENCONTRA MAIS INFORÇAÕES"
}




// function botao(){
//     const buttao = document.getElementsByTagName('button');
// }

// addEventListener('click', botao())

const buttao = document.getElementById('butão')

    function mouseEmCima() {
        console.log("MOUSE AQUI")
    }
    buttao.addEventListener('mouseover', mouseEmCima);

