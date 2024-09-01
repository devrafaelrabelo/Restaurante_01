export default class LoginUser {
  constructor() {
    this.eventLogar = this.eventLogar.bind(this)
  }

  logar() {
    const listaUsers = JSON.parse(localStorage.getItem('usuarios'))

    if (this.validarLogin(listaUsers)) {
      window.location.href = 'search.html'
      const usuarioLogado = document.querySelector('.usuario_logado span')
      usuarioLogado.innerText = 'teste'
    } else {
      console.log('Dados Incorretos')
    }
  }

  eventLogar(e) {
    e.preventDefault()
    this.logar()
  }

  validarLogin(listaUsers) {
    let validacao = false
    listaUsers.forEach((usuario) => {
      if (usuario.user === this.userInput.value && usuario.passwd === this.passInput.value) {
        const token = {
          "token": new Date().getTime(),
          "usuario": usuario.nome
        }
        localStorage.setItem('token', JSON.stringify(token))
        validacao = true
      }
    })

    return validacao
  }


  addEvents() {
    this.btnLogin = document.querySelector('.btn_login')
    if (this.btnLogin) {
      this.btnLogin.addEventListener('click', this.eventLogar)
    }

    this.userInput = document.querySelector('.user_input')
    this.passInput = document.querySelector('.pass_input')
  }
  init() {
    this.addEvents()
  }
}