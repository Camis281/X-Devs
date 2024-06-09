//Avançar para o proximo cartão
//1. Pegar elemento do html:
const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0 
const cartoes = document.querySelectorAll(".cartao")

//2.indentificar o click do usuario em avançar
btnAvancar.addEventListener('click', function(){
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1
    if(ehUltimoCartao) return
  
    //3.Esconder o cartão selecinado
    esconderCartaoSelecionado()

    //4. Passar para o proximo cartão e marca ele como selecionado
    cartaoAtual++;
    mostrarCartao()
}) 

//2.indentificar o click do usuario em voltar
btnVoltar.addEventListener('click', function(){
    const ehPrimeiroCartao = cartaoAtual === 0
    if(ehPrimeiroCartao ) return

    //3.Esconder o cartão selecinado
    esconderCartaoSelecionado()

    //4. Passar para o cartão arterior e marca ele como selecionado
    cartaoAtual--;
    mostrarCartao()
}) 

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado")
}

function esconderCartaoSelecionado() {
    cartaoSelecionado = document.querySelector(".selecionado")
    cartaoSelecionado.classList.remove("selecionado")
}

