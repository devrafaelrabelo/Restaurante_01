export default class Produto {
  constructor(cardapio, palavraChave) {
    this.cardapio = [...cardapio]
    this.produto = document.querySelectorAll(palavraChave)

    this.eventRetornaProduto = this.eventRetornaProduto.bind(this)
  }

  retornaProduto(name) {
    if (this.cardapio.filter((p) => p.nome === name)) {
      window.location.href = `./produto.html?produto=${name}`;
    }
  }

  eventRetornaProduto(e) {
    const name = e.currentTarget.querySelector('h3').innerText;
    this.retornaProduto(name);
  }

  addEvents() {
    if (this.produto) {
      this.produto.forEach((produto) => {
        produto.addEventListener('click', this.eventRetornaProduto)
      })
    }
  }

  init() {
    this.addEvents();
  }
}