export default class Cardapio {
  constructor(url) {
    this.url = url
  }

  async fetchCardapio() {
    const response = await fetch(this.url)
    const cardapioJSON = await response.json();

    return cardapioJSON;
  }

  init() {
    return this.fetchCardapio();
  }
}