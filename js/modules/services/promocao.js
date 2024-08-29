import shuffle from '../auxiliares/funcaoAuxiliares.js'

export default class Promocao {
  constructor(cardapio) {
    this.cardapio = [...cardapio];
    this.promocaoList = document.querySelector('.promocao_cards')
  }

  retornaPromocao() {
    const cardapio = this.cardapio.filter((produto) => produto.desconto > 0)
    this.cardapio = [...cardapio]

    shuffle(this.cardapio)

    this.preencherPromocao()

    return this.cardapio
  }

  preencherPromocao() {
    for (let i = 0; i < 4; i++) {
      this.promocaoList.innerHTML += `
        <div class="promocao_card">
          <figure class="promocao_card_img">
            <img src="${this.cardapio[i].img}" alt="${this.cardapio[i].nome}" width="250" height="200">
          </figure>
          <div class="promocao_card_infos">
            <h3>${this.cardapio[i].nome}</h3>
            <p>${this.cardapio[i].descricao}.</p>

            ${this.cardapio[i].desconto > 0 ? `<p>R$ ${(this.cardapio[i].preco * (1 - this.cardapio[i].desconto)).toFixed(2)}<span>R$ ${this.cardapio[i].preco.toFixed(2)} </span></p>` : `<p>R$  ${this.cardapio[i].preco.toFixed(2)} </p>`}
            
            <p>VENDIDOS: ${this.cardapio[i].qtdvendidos}</p>
          </div>
        </div>`
    }
  }

  init() {
    if (this.promocaoList) {
      this.retornaPromocao()
    }
  }
}