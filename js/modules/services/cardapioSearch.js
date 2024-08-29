export default class CardapioSearch {
  constructor(cardapio) {
    this.cardapio = [...cardapio]
    this.cardapioPrincipal = document.querySelector('.cardapio_cards')
    this.search = window.location.href.split('?search=')[1]
    this.categoria = window.location.href.split('?categoria=')[1]
  }

  retornaSearch() {
    const cardapio = this.cardapio.filter((produto) => {
      if (produto.categoria.toLowerCase().includes(this.search.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(this.search.toLowerCase()) ||
        produto.nome.toLowerCase().includes(this.search.toLowerCase()) || this.verificaNosIngredientes(produto.ingredientes))
        return produto
    })

    this.preencherCardapio(cardapio)
    return cardapio
  }

  verificaNosIngredientes(ingredientes) {
    let validation = false
    ingredientes.forEach(ingrediente => {
      if (ingrediente.toLowerCase().includes(this.search.toLowerCase())) {
        validation = true
      }
    });
    return validation
  }

  retornaCategoria() {
    const cardapio = this.cardapio.filter((produto) => {
      if (produto.categoria.toLowerCase().includes(this.categoria.toLowerCase()))
        return produto
    })

    this.preencherCardapio(cardapio)
    return cardapio
  }

  preencherCardapio(cardapio) {
    cardapio.forEach((produto) => {
      this.cardapioPrincipal.innerHTML += `
      <div class="cardapio_card">
        <figure class="cardapio_card_img">
          <img src="${produto.img}" alt="${produto.nome}" width="250" height="200">
        </figure>
        <div class="cardapio_card_infos">
          <h3>${produto.nome}</h3>
          <p>${produto.descricao}.</p>

          ${produto.desconto > 0 ? `<p>R$ ${(produto.preco * (1 - produto.desconto)).toFixed(2)}<span>R$ ${produto.preco.toFixed(2)} </span></p>` : `<p>R$  ${produto.preco.toFixed(2)} </p>`}
          
          <p>VENDIDOS: ${produto.qtdvendidos}</p>
        </div>
      </div>`
    })

  }

  init() {
    if (this.cardapioPrincipal) {
      if (this.search) {
        this.retornaSearch()
      } else if (this.categoria) {
        this.retornaCategoria()
      } else {
        this.preencherCardapio(this.cardapio)
      }
    }

    return this
  }
}