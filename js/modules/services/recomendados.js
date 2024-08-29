export default class Recomendados {
  constructor(cardapio) {
    this.cardapio = [...cardapio];
    this.recomandosList = document.querySelector('.recomendados_cards')
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
            <p>${this.cardapio[i].preco} <span>R$ 3.5</span></p>
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