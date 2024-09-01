export default class LogoffUser {
  constructor() {

    this.eventDeslogar = this.eventDeslogar.bind(this)
  }

  deslogar() {
    localStorage.removeItem('token');
    window.location.href = 'index.html'

    this.addEvents()
  }

  eventDeslogar(e) {
    e.preventDefault()
    this.deslogar()
  }

  addEvents() {
    this.btnLogoff = document.querySelector('.btn_logoff')
    if (this.btnLogoff) {
      this.btnLogoff.addEventListener('click', this.eventDeslogar)
    }
  }

  init() {
    this.addEvents()
  }
}