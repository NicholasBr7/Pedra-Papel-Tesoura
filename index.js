const textoJogador = document.querySelector("#textoJogador")
const textoComputador = document.querySelector("#textoComputador")
const textoResultado = document.querySelector("#textoResultado")
const botoes = document.querySelectorAll(".botoes")

let jogador; let computador; let resultado;

botoes.forEach(botao => botao.addEventListener("click", () => {
    jogador = botao.textContent;
    vezComputador();
    textoJogador.textContent = "Jogador: " + jogador;
    textoComputador.textContent = "Computador: " + computador;
    textoResultado.textContent = vencedor();
}));

function vezComputador(){
    const numAleatorio = Math.floor(Math.random() * 3) + 1
    if (numAleatorio == 1){
        computador = "Pedra"
    } 
    else if (numAleatorio == 2){
        computador = "Papel"
    }
    else if (numAleatorio == 3) {
        computador == "Tesoura"
    }
}
function vencedor (){
    if (jogador == computador) {
        return "Empate!"
    } 
    else if (jogador == "Papel" && computador == "Pedra"){
        return "Você venceu :)"
    }
    else if (jogador == "Tesoura" && computador == "Papel"){
        return "Você venceu :)"
    }
    else if (jogador == "Pedra" && computador == "Tesoura"){
        return "Você venceu :)"
    }
    else if (jogador == "Papel" && computador == "Tesoura"){
        return "O computador venceu :("
    }
    else if (jogador == "Tesoura" && computador == "Pedra"){
        return "O computador venceu :("
    }
    else if (jogador == "Pedra" && computador == "Papel"){
        return "O computador venceu :("
    }
}