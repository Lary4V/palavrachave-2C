import {PALAVRAS_RUINS} from "./palavrasruins.js";

const botaoMostraPalavras = document.querySelector('#botao-PalavrasChave');

botaoMostraPalavras.addEventListener('click', mostraPalavraChave);

function mostraPalavraChave () {
    const texto = document.querySelector ('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processatexto (texto);

    campoResultado.textContent = palavrasChave.join(",");
}