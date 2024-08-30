import Pedido from "./pedido.js"

export default class Carrinho {
  constructor() {
    this.carrinho = JSON.parse(localStorage.getItem('carrinho'))
    this.carrinhoCard = document.querySelector('.carrinho_cards')

    this.carrinhoSubtotal = document.querySelector('.carrinho_subtotal p span')
    this.carrinhoDesconto = document.querySelector('.carrinho_desconto p span')
    this.carrinhoTotal = document.querySelector('.carrinho_total p span')

    this.eventExcluirProduto = this.eventExcluirProduto.bind(this)
    this.eventDiminuirProduto = this.eventDiminuirProduto.bind(this)
    this.eventAumentarProduto = this.eventAumentarProduto.bind(this)
    this.eventFinalizarPedido = this.eventFinalizarPedido.bind(this)
  }

  preencherCarrinho(carrinhoProdutos) {
    this.carrinhoCard.innerHTML = ``
    carrinhoProdutos.forEach(produto => {
      this.carrinhoCard.innerHTML += `
        <li class="produto_carrinho">
              <div class="produto_carrinho_img">
                <img src="${produto.img}" alt="${produto.nome}">
              </div>
              <div class="produto_carrinho_info">
                <h2 class="produto_carrinho_nome">${produto.nome}</h2>
                <p class="produto_carrinho_preco"> R$ ${(produto.preco * (1 - produto.desconto)).toFixed(2)} <span>R$ ${produto.preco.toFixed(2)}</span>
                </p>
                <p class="produto_carrinho_descricao">${produto.descricao}</p>
                <div class="produto_carrinho_acoes">
                  <button class="btn btnDiminuir">-</button>
                  <p class="produto_carrinho_quantidade">${produto.quantidade}</p>
                  <button class="btn btnAumentar">+</button>
                  <button class="btn btn_remove"><img src="./img/lixeira.png" alt="Lixeira" width="39" height="31"></button>
                </div>
              </div>
            </li>
      `
    });

    this.addEvents()
  }

  excluirProduto(nomeProduto) {
    this.carrinhoAntigo = JSON.parse(localStorage.getItem('carrinho'))
    this.carrinhoNovo = this.carrinhoAntigo.filter((p) => p.nome.toLowerCase() !== nomeProduto.toLowerCase())

    localStorage.setItem('carrinho', JSON.stringify(this.carrinhoNovo))

    this.preencherCarrinho(this.carrinhoNovo)
  }

  eventExcluirProduto(e) {
    const nameProduto = e.currentTarget.parentElement.parentElement.querySelector('.produto_carrinho_nome').textContent
    this.excluirProduto(nameProduto)
  }

  diminuirProduto(nomeProduto) {
    let aux = false
    this.carrinhoAntigo = JSON.parse(localStorage.getItem('carrinho'))
    this.carrinhoNovo = this.carrinhoAntigo.map((p) => {
      if (p.nome.toLowerCase() === nomeProduto.toLowerCase()) {
        if (p.quantidade > 1) {
          p.quantidade--;
        } else {
          aux = true
        }
      }
      return p;
    })

    if (aux) {
      this.excluirProduto(nomeProduto)
    } else {
      localStorage.setItem('carrinho', JSON.stringify(this.carrinhoNovo))

      this.preencherCarrinho(this.carrinhoNovo)
    }

    this.preencherValores()
  }

  eventDiminuirProduto(e) {
    const nameProduto = e.currentTarget.parentElement.parentElement.querySelector('.produto_carrinho_nome').textContent
    console.log(e.currentTarget.parentElement.parentElement.querySelector('.produto_carrinho_nome').textContent)
    this.diminuirProduto(nameProduto)
  }

  aumentarProduto(nomeProduto) {
    this.carrinhoAntigo = JSON.parse(localStorage.getItem('carrinho'))
    this.carrinhoNovo = this.carrinhoAntigo.map((p) => {
      if (p.nome.toLowerCase() === nomeProduto.toLowerCase()) {
        p.quantidade++;
      }
      return p;
    })

    localStorage.setItem('carrinho', JSON.stringify(this.carrinhoNovo))

    this.preencherCarrinho(this.carrinhoNovo)

    this.addEvents();
    this.preencherValores()
  }

  eventAumentarProduto(e) {
    const nameProduto = e.currentTarget.parentElement.parentElement.querySelector('.produto_carrinho_nome').textContent
    console.log(e.currentTarget.parentElement.parentElement.querySelector('.produto_carrinho_nome').textContent)
    this.aumentarProduto(nameProduto)
  }

  atualizarSubtotal() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'))
    const total = carrinho.reduce((acc, produto) => acc + (produto.preco * produto.quantidade), 0)
    return total.toFixed(2)
  }

  atualizarDesconto() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'))
    const total = carrinho.reduce((acc, produto) => acc + ((produto.preco * produto.desconto) * produto.quantidade), 0)
    return total.toFixed(2)
  }

  atualizarTotal() {
    this.valorTotal = (this.atualizarSubtotal() - this.atualizarDesconto()).toFixed(2)
    return this.valorTotal
  }

  preencherValores() {
    this.carrinhoSubtotal.innerText = this.atualizarSubtotal()
    this.carrinhoDesconto.innerText = this.atualizarDesconto()
    this.carrinhoTotal.innerText = this.atualizarTotal()
  }

  finalizarPedido() {
    const pedido = new Pedido(this.carrinho, this.valorTotal).init()

    localStorage.removeItem('carrinho')
    window.location.reload()
  }

  eventFinalizarPedido(e) {
    e.preventDefault()
    console.log('Event')
    this.finalizarPedido()
  }

  addEvents() {
    this.btnDiminuir = document.querySelectorAll('.btnDiminuir')
    this.btnAumentar = document.querySelectorAll('.btnAumentar')
    this.btnRemover = document.querySelectorAll('.btn_remove')

    if (this.btnDiminuir && this.btnAumentar && this.btnRemover) {
      this.btnDiminuir.forEach((btn => {
        btn.addEventListener('click', this.eventDiminuirProduto)
      }))
      this.btnAumentar.forEach((btn => {
        btn.addEventListener('click', this.eventAumentarProduto)
      }))
      this.btnRemover.forEach((btn => {
        btn.addEventListener('click', this.eventExcluirProduto)
      }))
    }

    this.btnfinalizarPedido = document.querySelector('.carrinho_finalizar')
    this.btnfinalizarPedido.addEventListener('click', this.eventFinalizarPedido)

    this.preencherValores()
  }

  init() {
    if (this.carrinhoCard && this.carrinho) {
      this.preencherCarrinho(this.carrinho)
      setTimeout(() => {
        this.addEvents()
      })
    }
  }
}