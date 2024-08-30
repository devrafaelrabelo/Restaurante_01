export default class Pedido {
  constructor(pedido, valorTotal) {
    this.pedido = [...pedido]
    this.numeroPedido = new Date().getTime().toString().slice(5, -1)
    this.dataPedido = new Date().toLocaleString('pt-BR', { timezone: 'UTC' })
    this.valorTotal = valorTotal
  }

  salvarPedido() {
    const listaPedido = JSON.parse(localStorage.getItem('pedido')) || [];

    listaPedido.push(this)

    localStorage.setItem('pedido', JSON.stringify(listaPedido));
  }

  calcularQuantidade() {
    this.quantidadeItens = 0
    this.pedido.forEach((produto) => {
      this.quantidadeItens += produto.quantidade
    })
  }

  init() {
    this.calcularQuantidade()
    this.salvarPedido()
  }
}

