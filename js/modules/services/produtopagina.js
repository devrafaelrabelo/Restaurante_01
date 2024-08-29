export default class PaginaProduto {
  constructor(cardapio) {
    this.cardapio = [...cardapio]
    this.produtoCard = document.querySelector(".produto_container")
  }

  imprimir(produtoPagina) {
    this.produtoCard.innerHTML = `
        <figure class="produto_img">
            <img src="${produtoPagina.img}" alt="${produtoPagina.nome}" width="650" height="500">
          </figure>
          <div class="produto_infos">
            <h3 class="produto_infos_title">${produtoPagina.nome}</h3>
            <p class="produto_infos_preco">R$ 2.80 <span>R$ ${produtoPagina.preco}</span></p>
            <div class="quantidade">
              <button class="btn_aumentar"> - </button>
              <span class="quantidade_item"> 1 </span>
              <button class="btn_diminuir"> + </button>
            </div>
            <div class="produto_infos_sobre">
              <h4>Sobre</h4>
              <p>${produtoPagina.descricao}.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloremque ex,
                sint quam reprehenderit error veritatis optio, reiciendis quibusdam autem quae.
                Dolor fugiat fuga quas beatae recusandae tempora ut nam.
              </p>
              <h4>Principais Ingredientes</h4>
              <p>${produtoPagina.ingredientes}</p>
            </div>
            <button class="btn_adicionar">ADICIONAR AO CARRRINHO</button>
          </div>`
  }

  retornaProduto(name) {
    const produto = this.cardapio.filter(p => p.nome.toLowerCase() === name.toLowerCase()
    )
    this.imprimir(...produto)
  }

  init() {
    if (this.produtoCard) {
      this.retornaProduto(decodeURI(window.location.href.split('?produto=')[1]));
    }
  }
}