import outsideclick from "./outsideclick.js";

export default class MenuMobile {
  constructor() {
    this.btnMenu = document.querySelector('[data-menu="button"]');
    this.menuList = document.querySelector('[data-menu="list"]');

    this.events = ['touchstart', 'click'];

    this.eventToggleMenuMobile = this.eventToggleMenuMobile.bind(this);
  }

  toggleMenuMobile() {
    this.menuList.classList.add('ativo')
    this.btnMenu.classList.add('ativo')
    outsideclick(this.menuList, this.events, () => {
      this.menuList.classList.remove('ativo')
      this.btnMenu.classList.remove('ativo')
    });
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