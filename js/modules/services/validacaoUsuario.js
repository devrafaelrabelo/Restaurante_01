export default class ValidacaoUsuario {
  constructor() {
    this.url = window.location.pathname
  }

  validaLogin() {
    const validacao = JSON.parse(localStorage.getItem('token'))

    if (validacao == null) {
      window.location.href = 'index.html'
    } else {
      if (this.url == '/painelVendedor.html') {
        if (validacao.usuario !== 'Empresa X') {
          window.location.href = 'index.html'
        }
      }
    }
  }

  autenticacaoPrint() {
    const usuarioLogado = document.querySelector('.usuario_logado')
    const nomeUsuario = JSON.parse(localStorage.getItem('token'))

    if (nomeUsuario) {
      usuarioLogado.classList.add('ativo')
      const spanUsuario = document.querySelector('.usuario_logado span')
      spanUsuario.innerText = nomeUsuario.usuario

      const sair = document.querySelector('.btn_logoff')
      sair.classList.add('ativo')

      const entrar = document.querySelector('.btn_Login')
      entrar.classList.add('inativo')

      if (nomeUsuario.usuario === 'Empresa X') {
        const painelV = document.querySelector('.painelV')
        painelV.classList.add('ativo')
      }

    }
  }

  init() {
    this.autenticacaoPrint()
    if (!this.url == '/index.html') {
      this.validaLogin()
    }
  }
}