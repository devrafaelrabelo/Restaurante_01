export default class CardapioSearch {
  constructor(cardapio) {
    this.cardapio = [...cardapio]
    this.cardapioPrincipal = document.querySelector('.cardapio_cards')
    this.search = window.location.href.split('?search=')[1]
  }

  retornaSearch() {
    const cardapio = this.cardapio.filter((produto) => {
      if (produto.nome.toLowerCase().includes(this.search.toLowerCase()))
        return produto
    })

    this.preencherCardapio()
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
    if (this.search) {
      console.log(this.search)
      console.log(this.retornaSearch())
    }
    console.log(this.cardapioPrincipal)

    return this
  }
}