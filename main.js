function criarCartao(categoria, pergunta, resposta) {
    let container=document.getElementById('container');
    let cartao=document.createElement('article');
    cartao.classname = 'cartao'
    cartao.innerHTML = ` 
    <div class="Cartao__Conteudo">
    <h3>${Categoria}</h3>
<div class="Cartao__Conteudo__Pergunta">
    <p>${pergunta}</p>
</div>
<div class="Cartao__Conteudo__Resposta">
    <p>${resposta}</p>
</div>
    </div>
    `
    container.appendChild(cartao);
}