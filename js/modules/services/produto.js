import Cardapio from './cardapio.js';

export default class Produto {
  constructor(cardapio, palavraChave) {
    this.cardapio = [...cardapio]
    this.produto = document.querySelectorAll(palavraChave)
  }

  paginaProduto(e) {
    const name = e.currentTarget.querySelector('h3').innerText;
    window.location.href = `./produto.html?produto=${name}`;
  }

  addEvents() {
    if (this.produto) {
      this.produto.forEach((produto) => {
        produto.addEventListener('click', this.paginaProduto)
      })
    }
  }

  init() {
    this.addEvents();
  }
}