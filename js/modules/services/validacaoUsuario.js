export default class ValidacaoUsuario {
  constructor() {
    this.url = window.location.pathname
  }

  validaLogin() {
    const validacao = JSON.parse(localStorage.getItem('token'))

    if (validacao == null) {
      window.location.href = 'index.html'
      alert('SEM PRIVILÉGIO')
    } else {
      console.log('Usuario Logado')
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