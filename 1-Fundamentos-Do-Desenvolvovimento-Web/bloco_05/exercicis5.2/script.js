// const ex02=document.getElementById('elementoOndeVoceEsta').parentElement;
//     ex02.style.backgroundColor="red"

// const ex03=document.getElementById('primeiroFilhoDoFilho')
//     ex02.innerText="Você se lembra dos vídeos da aula anterior, como fazer isso?"

// const ex04=document.getElementById('pai');
//     const test04 = ex03.firstElementChild

// const ex05=document.getElementById('#elementoOndeVoceEsta').previousSibling;

// const ex06=document.getElementById('elementoOndeVoceEsta').nextSibling;
// const ex07 = document.getElementById('elementoOndeVoceEsta').nextSibling;

const ex01 = document.getElementById('pai');
const adiciona01 = document.createElement('section')
ex01.appendChild(adiciona01);

const ex02 = document.getElementById('elementoOndeVoceEsta');
const adiciona02 = document.createElement('section');
ex02.appendChild(adiciona02);

const ex03 = document.getElementById('primeiroFilhoDoFilho');
const adiciona03 = document.createElement('section');
ex03.appendChild(adiciona03);

const ex04 = document.getElementById('primeiroFilhoDoFilho').firstElementChild;
const ex05 = ex04.nextElementSibling


const ex07 = document.getElementById('paiDoPai').children