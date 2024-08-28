import outsideclick from "./outsideclick";

export default class MenuMobile {
  constructor() {
    this.btnMenu = document.querySelector('[data-menu="button"]');
    this.menuList = document.querySelector('[data-menu="list"]');

    this.events = ['touchstart', 'click'];

    this.eventToggleMenuMobile = this.eventToggleMenuMobile.bind(this);
  }

  toggleMenuMobile() {
    this.menuList.classList.toggle('ativo')
    this.btnMenu.classList.toggle('ativo')
    outsideclick();
  }

  eventToggleMenuMobile(e) {
    e.preventDefault()
    this.toggleMenuMobile()
  }

  addEvents() {
    this.events.forEach((evento) => {
      this.btnMenu.addEventListener(evento, this.eventToggleMenuMobile)
    })
  }

  init() {
    if (this.btnMenu && this.menuList) {
      this.addEvents();
    }

    return this;
  }
}


// Começar o OustiseClick