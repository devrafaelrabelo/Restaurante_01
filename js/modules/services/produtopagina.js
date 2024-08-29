export default class PaginaProduto {
  constructor(cardapio) {
    this.cardapio = [...cardapio]
    this.produtoCard = document.querySelector(".produto_container")

    this.adicionarCarrinho = this.adicionarCarrinho.bind(this)
    this.diminuirQuantidade = this.diminuirQuantidade.bind(this)
    this.aumentarQuantidade = this.aumentarQuantidade.bind(this)
  }

  preencherProduto(produtoPagina) {
    this.produtoCard.innerHTML = `
        <figure class="produto_img">
            <img src="${produtoPagina.img}" alt="${produtoPagina.nome}" width="650" height="500">
          </figure>
          <div class="produto_infos">
            <h3 class="produto_infos_title">${produtoPagina.nome}</h3>
            <p class="produto_infos_preco">R$ ${(produtoPagina.preco * (1 - produtoPagina.desconto)).toFixed(2)} <span>R$ ${produtoPagina.preco.toFixed(2)}</span></p>
            <div class="quantidade">
              <button class="btn_diminuir"> - </button>
              <span class="quantidade_item"> 2 </span>
              <button class="btn_aumentar"> + </button>
            </div>
            <div class="produto_infos_sobre">
              <h4>Sobre</h4>
              <p>${produtoPagina.descricao}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloremque ex,
                sint quam reprehenderit error veritatis optio, reiciendis quibusdam autem quae.
                Dolor fugiat fuga quas beatae recusandae tempora ut nam.
              </p>
              <h4>Principais Ingredientes</h4>
              <p>${produtoPagina.ingredientes}</p>
            </div>
            <button class="btn_adicionar">ADICIONAR AO CARRRINHO</button>
          </div>`
  }

  retornaProduto(name) {
    this.produto = this.cardapio.filter(p => p.nome.toLowerCase() === name.toLowerCase())
    this.produto = this.produto[0]
    this.preencherProduto(this.produto)
  }

  adicionarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    this.quantidade = Number(document.querySelector('.quantidade_item').innerText)

    if (carrinho.length === 0) {
      this.produto.quantidade = this.quantidade;
    }

    if (this.verificarSeTemNoCarrinho(this.produto.nome)) {
      carrinho.forEach(produto => {
        if (produto.nome === this.produto.nome) {
          produto.quantidade = Number(produto.quantidade) + this.quantidade;
        }
      });
    } else {
      this.produto.quantidade = this.quantidade;
      carrinho.push(this.produto);
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }

  diminuirQuantidade() {
    this.quantidade = document.querySelector('.quantidade_item')

    let quantidade = Number(this.quantidade.innerText)
    if (quantidade > 1) {
      quantidade--
    }
    this.quantidade.innerText = quantidade;
  }

  aumentarQuantidade() {
    this.quantidade = document.querySelector('.quantidade_item')

    let quantidade = Number(this.quantidade.innerText)
    quantidade++

    this.quantidade.innerText = quantidade;
  }

  addEvents() {

    if (this.produtoCard) {
      this.btnDiminuir = document.querySelector('.btn_diminuir')
      this.btnDiminuir.addEventListener('click', this.diminuirQuantidade)

      this.btnAumentar = document.querySelector('.btn_aumentar')
      this.btnAumentar.addEventListener('click', this.aumentarQuantidade)

      this.btnAdicionar = document.querySelector('.btn_adicionar')
      this.btnAdicionar.addEventListener('click', this.adicionarCarrinho)


    }
  }

  verificarSeTemNoCarrinho(nomeProduto) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const produtoNoCarrinho = carrinho.find(produto => produto.nome.toLowerCase() === nomeProduto.toLowerCase());
    if (produtoNoCarrinho) {
      return true;
    } else {
      return false;
    }
  }

  init() {
    setTimeout(() => {
      this.addEvents()
    })

    if (this.produtoCard) {
      this.retornaProduto(decodeURI(window.location.href.split('?produto=')[1]));
    }
  }
}