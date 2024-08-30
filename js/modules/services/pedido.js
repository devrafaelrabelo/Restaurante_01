export default class Pedido {
  constructor(pedido) {
    this.pedido = [...pedido]
    this.numeroPedido = new Date().getTime().toString().slice(5, -1)
  }

  salvarPedido() {
    localStorage.setItem(`${this.numeroPedido}`, JSON.stringify(this.pedido))
  }

  init() {
    this.salvarPedido()
  }
}

