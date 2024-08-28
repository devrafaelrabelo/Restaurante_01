export default class MenuMobile {
  constructor() {
    this.btnMenu = document.querySelector('[data-menu="button"]')
    this.menuList = document.querySelector('[data-menu="list"]')

    this.eventToggleMenuMobile = this.eventToggleMenuMobile.bind(this)
  }

  toggleMenuMobile() {
    this.menuList.classList.toggle('ativo')
    this.btnMenu.classList.toggle('ativo')
  }

  eventToggleMenuMobile(e) {
    e.preventDefault()
    this.toggleMenuMobile()
  }

  addEvents() {
    ['touchstart', 'click'].forEach((evento) => {
      this.btnMenu.addEventListener(evento, this.eventToggleMenuMobile)
    })
  }

  init() {
    this.addEvents();
  }
}


// Começar o OustiseClick