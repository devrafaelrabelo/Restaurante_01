export default class Pedido {
  constructor(pedido, valorTotal, cliente) {
    this.pedido = [...pedido]
    this.numeroPedido = new Date().getTime().toString().slice(5, -1)
    this.dataPedido = new Date().toLocaleString('pt-BR', { timezone: 'UTC' })
    this.valorTotal = valorTotal
    this.cliente = cliente;
  }

  salvarPedido() {
    const listaPedido = JSON.parse(localStorage.getItem(this.cliente)) || [];

    listaPedido.push(this)

    localStorage.setItem(this.cliente, JSON.stringify(listaPedido));
  }

  calcularQuantidade() {
    this.quantidadeItens = 0
    this.pedido.forEach((produto) => {
      this.quantidadeItens += produto.quantidade
    })
  }

  listaPedidos() {
    const listaPedido = JSON.parse(localStorage.getItem('listaPedidos')) || [];

    listaPedido.push(this)

    localStorage.setItem('listaPedidos', JSON.stringify(listaPedido))
  }

  init() {
    this.calcularQuantidade()
    this.salvarPedido()
    this.listaPedidos()
  }
}

