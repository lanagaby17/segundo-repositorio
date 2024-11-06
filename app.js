function criaCartao (item, pergunta,resposta) {
    //console.log(item, pergunta, resposta)

    let fleshcard = document.getElementById('fleshcard');
    let cartao = document.createElement('article');

    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao__conteudo__pergunta">
                    <p>Saiba qual é a Visão de nossa empresa!</p>
                </div>
                
                <div class="cartao__conteudo__resposta">
                    <p>Nossa Visão é ... </p>
                </div>
            </div>
    `
    Flashcard.appendChild(cartao);

}