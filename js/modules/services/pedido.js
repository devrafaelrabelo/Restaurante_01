export default class Pedido {
  constructor(pedido) {
    this.pedido = [...pedido]
    this.numeroPedido = new Date().getTime().toString().slice(5, -1)
  }

  salvarPedido() {
    const listaPedido = JSON.parse(localStorage.getItem('pedido')) || [];

    listaPedido.push(this)

    localStorage.setItem('pedido', JSON.stringify(listaPedido));
  }

  init() {
    this.salvarPedido()
  }
}

