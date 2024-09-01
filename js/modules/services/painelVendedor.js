export default class PainelVendedor {
  constructor() {
    this.listaPedidos = JSON.parse(localStorage.getItem('listaPedidos'))

    this.painelCards = document.querySelector('.painelV_cards')
    this.valor = document.querySelector('.painelV_total p span')

  }

  preencherPedidos(listaPedidos) {
    this.painelCards.innerHTML = ''
    listaPedidos.forEach(pedido => {
      this.painelCards.innerHTML += `
        <li class="painel_card">
            <p class="pedido_numero">Nº Pedido: <span> ${pedido.numeroPedido}</span></p>
            <p class="pedido_data">Data: <span> ${pedido.dataPedido}</span></p>
            <p class="pedido_pagamento">Tipo: <span>ENTREGA</span></p>
            <p class="pedido_status">Status: <span>AGUARDO</span></p>
            <p class="pedido_cliente">Nome: <span>${pedido.cliente}</span></p>
            <p class="pedido_quantidade_itens">Itens: <span>${pedido.quantidadeItens}</span></p>
            <p class="pedido_pagamento">Pagamento: <span>PIX</span></p>
            <p class="pedido_valor">Valor: R$ <span>${pedido.valorTotal}</span></p>
        </li>
      `
    });
  }

  coletarPedidos() {
    this.listaPedidos = JSON.parse(localStorage.getItem('pedido'))

    this.preencherPedidos(this.listaPedidos)
  }

  calcularValor() {
    this.valorGasto = this.listaPedidos.reduce((acc, pedido) => {
      return (acc + Number(pedido.valorTotal));
    }, 0)

    this.valor.innerText = this.valorGasto
  }


  init() {
    if (this.painelCards && this.listaPedidos) {
      this.preencherPedidos(this.listaPedidos)
      this.calcularValor()
    }
  }
}