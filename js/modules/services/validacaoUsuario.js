export default class ValidacaoUsuario {
  constructor() {
    this.url = window.location.pathname
  }

  validaLogin() {
    const validacao = JSON.parse(localStorage.getItem('token'))

    if (validacao == null) {
      window.location.href = 'index.html'
      alert('VOCE NAO ESTA LOGADO')
    } else {
      if (validacao) {
        const sair = document.querySelector('.btn_logoff')
        console.log(sair)
        sair.classList.add('ativo')
      }

      if (this.url == '/painelVendedor.html') {
        if (validacao.usuario !== 'Empresa X') {
          window.location.href = 'index.html'
          alert('VOCE NAO É VENDEDOR')
        }
      }
    }

    if (validacao.usuario === 'Empresa X') {
      const painelV = document.querySelector('.painelV')
      painelV.classList.add('ativo')
    }
  }

  init() {
    if (this.url == '/index.html') {
      console.log('Tela Inicial')
    } else {
      this.validaLogin()
    }
  }
}