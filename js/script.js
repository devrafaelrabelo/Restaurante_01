import MenuMobile from './modules/menuMobile.js'
import Cardapio from './modules/services/cardapio.js';
import Recomendados from './modules/services/recomendados.js';

const menuMobile = new MenuMobile();
menuMobile.init();

const cardapio = new Cardapio('../data/db.json');
const cardapioPrincipal = await cardapio.init();

console.log(cardapioPrincipal)

const recomendados = new Recomendados(cardapioPrincipal).retornaRecomendados();
console.log(recomendados)