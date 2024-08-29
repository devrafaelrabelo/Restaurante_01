export default class CardapioSearch {
  constructor(cardapio) {
    this.cardapio = [...cardapio]
    this.cardapioPrincipal = document.querySelector('.cardapio_cards')
    this.search = window.location.href.split('?search=')[1]
    this.categoria = window.location.href.split('?categoria=')[1]

    this.btndesconto = document.querySelector('.btndesconto')
    this.btnaz = document.querySelector('.btnaz')
    this.btnza = document.querySelector('.btnza')
    this.btnmenor = document.querySelector('.btnmenor')
    this.btnmaior = document.querySelector('.btnmaior')
  }

  retornaSearch() {
    const cardapio = this.cardapio.filter((produto) => {
      if (produto.categoria.toLowerCase().includes(this.search.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(this.search.toLowerCase()) ||
        produto.nome.toLowerCase().includes(this.search.toLowerCase()) || this.verificaNosIngredientes(produto.ingredientes))
        return produto
    })

    this.cardapio = [...cardapio]

    this.preencherCardapio(cardapio)
    return cardapio
  }

  verificaNosIngredientes(ingredientes) {
    let validation = false
    ingredientes.forEach(ingrediente => {
      if (ingrediente.toLowerCase().includes(this.search.toLowerCase())) {
        validation = true
      }
    });
    return validation
  }

  retornaCategoria() {
    const cardapio = this.cardapio.filter((produto) => {
      if (produto.categoria.toLowerCase().includes(this.categoria.toLowerCase()))
        return produto
    })

    this.cardapio = [...cardapio]

    this.preencherCardapio(cardapio)
    return cardapio
  }

  preencherCardapio(cardapio) {
    this.cardapioPrincipal.innerHTML = ''
    cardapio.forEach((produto) => {
      this.cardapioPrincipal.innerHTML += `
      <div class="cardapio_card">
        <figure class="cardapio_card_img">
          <img src="${produto.img}" alt="${produto.nome}" width="250" height="200">
        </figure>
        <div class="cardapio_card_infos">
          <h3>${produto.nome}</h3>
          <p>${produto.descricao}.</p>

          ${produto.desconto > 0 ? `<p>R$ ${(produto.preco * (1 - produto.desconto)).toFixed(2)}<span>R$ ${produto.preco.toFixed(2)} </span></p>` : `<p>R$  ${produto.preco.toFixed(2)} </p>`}
          
          <p>VENDIDOS: ${produto.qtdvendidos}</p>
        </div>
      </div>`
    })

  }

  filtrarDesconto() {
    if (this.btndesconto.classList.contains('.ativo')) {
      this.preencherCardapio(this.cardapioAnterior)
      this.cardapio = [...this.cardapioAnterior]
      this.btndesconto.classList.remove('.ativo')
    } else {
      const cardapio = this.cardapio.filter((produto) => produto.desconto > 0)
      this.btndesconto.classList.add('.ativo')
      this.cardapioAnterior = [...this.cardapio]
      this.cardapio = [...cardapio]
      this.preencherCardapio(cardapio)
    }

    return this.cardapio
  }

  retornaAZ() {    
    this.cardapio.sort((a, b) => a.nome.localeCompare(b.nome))

    this.preencherCardapio(this.cardapio)

    return this.cardapio
  }

  retornaZA() {
    this.cardapio.sort((a, b) => b.nome.localeCompare(a.nome))

    this.preencherCardapio(this.cardapio)

    return this.cardapio
  }

  retornaMaiorV() {    
    this.cardapio.sort((a, b) => (a.preco * (1 - a.desconto)) < (b.preco * (1 - b.desconto)) ? 1 : -1)

    this.preencherCardapio(this.cardapio)

    return this.cardapio
  }

  retornaMenorV() {
    this.cardapio.sort((a, b) => (a.preco * (1 - a.desconto)) > (b.preco * (1 - b.desconto)) ? 1 : -1)

    this.preencherCardapio(this.cardapio)

    return this.cardapio
  }


  addEvents() {
    if (this.btndesconto) {
      this.btndesconto.addEventListener('click', (e) => this.filtrarDesconto())
    }

    if (this.btnaz) {
      this.btnaz.addEventListener('click', (e) => this.retornaAZ())
    }

    if (this.btnza) {
      this.btnza.addEventListener('click', (e) => this.retornaZA())
    }

    if (this.btnmenor) {
      this.btnmenor.addEventListener('click', (e) => this.retornaMenorV())
    }

    if (this.btnmaior) {
      this.btnmaior.addEventListener('click', (e) => this.retornaMaiorV())
    }
  }

  init() {
    this.addEvents()


    if (this.cardapioPrincipal) {
      if (this.search) {
        this.retornaSearch()
      } else if (this.categoria) {
        this.retornaCategoria()
      } else {
        this.preencherCardapio(this.cardapio)
      }
    }

    return this
  }
}