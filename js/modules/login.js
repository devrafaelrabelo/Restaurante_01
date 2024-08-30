import outsideclick from "./outsideclick.js"
import LoginUser from "./services/loginUser.js";

export default class LoginModal {
  constructor() {
    this.events = ['touchstart', 'click'];

    this.eventFecharModal = this.eventFecharModal.bind(this)
    this.eventAbrirModal = this.eventAbrirModal.bind(this)
    this.cliqueForaModal = this.cliqueForaModal.bind(this)
  }

  abrirModal() {
    const body = document.querySelector('body')
    const loginModal = document.createElement('section')
    loginModal.classList.add('login')

    loginModal.innerHTML += `
    <div class="login_container">
      <button class="btn_close">X</button>
      <form action="" class="form_login">
        <label class="user_label" for="">USER:</label>
        <input class="user_input" type="text">
        <label class="pass_label" for="">PASSWORD:</label>
        <input class="pass_input" type="password">
        <div class="form_btns">
          <button class="btn_login">LOGIN</button>
          <button class="btn_cancelar">CANCELAR</button>
        </div>
      </form>
    </div>
    `
    body.appendChild(loginModal)

    this.addEvents()

    const sistemaLogin = new LoginUser().init()
  }

  eventAbrirModal(e) {
    e.preventDefault()
    this.abrirModal();
  }

  fecharModal() {
    if (this.login.parentElement) {
      this.login.parentElement.removeChild(this.login)
    }
  }

  eventFecharModal(e) {
    e.preventDefault()
    this.fecharModal();
  }

  cliqueForaModal(event) {
    if (event.target === this.login) {
      this.fecharModal();
    }
  }

  addEvents() {
    this.loginContainer = document.querySelector('.login_container')
    this.btnLogin = document.querySelector('.btn_login')
    this.btnLogin = document.querySelector('.btn_Login')

    this.btnClose = document.querySelector('.btn_close')
    if (this.btnClose) {
      this.btnClose.addEventListener('click', this.eventFecharModal)
    }

    this.btnCancelar = document.querySelector('.btn_cancelar')
    if (this.btnCancelar) {
      this.btnCancelar.addEventListener('click', this.eventFecharModal)
    }

    if (this.btnLogin) {
      this.btnLogin.addEventListener('click', this.eventAbrirModal)
    }

    this.login = document.querySelector('.login')
    if (this.login) {
      this.login.addEventListener('click', this.cliqueForaModal)
    }
  }

  init() {
    this.addEvents()
  }
}