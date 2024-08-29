import Produto from "./produto.js";

export default class Recomendados {
  constructor(cardapio) {
    this.cardapio = [...cardapio];
    this.recomandosList = document.querySelector('.recomendados_cards')

    setTimeout(() => {
      const produto = new Produto(this.cardapio, '.recomendados_card').init()
    })   
  }

  retornaRecomendados() {
    this.cardapio.sort((a, b) => a.qtdvendidos < b.qtdvendidos ? 1 : -1)

    this.preencherRecomendados()

    return this.cardapio
  }

  preencherRecomendados() {
    for (let i = 0; i < 4; i++) {
      this.recomandosList.innerHTML += `
        <div class="recomendados_card">
          <figure class="recomendados_card_img">
            <img src="${this.cardapio[i].img}" alt="${this.cardapio[i].nome}" width="250" height="200">
          </figure>
          <div class="recomendados_card_infos">
            <h3>${this.cardapio[i].nome}</h3>
            <p>${this.cardapio[i].descricao}.</p>

            ${this.cardapio[i].desconto > 0 ? `<p>R$ ${(this.cardapio[i].preco * (1 - this.cardapio[i].desconto)).toFixed(2)}<span>R$ ${this.cardapio[i].preco.toFixed(2)} </span></p>` : `<p>R$  ${this.cardapio[i].preco.toFixed(2)} </p>`}
            
            <p>VENDIDOS: ${this.cardapio[i].qtdvendidos}</p>
          </div>
        </div>`
    }
  }


  init() {
    if (this.recomandosList) {
      this.retornaRecomendados()
    }
  }
}