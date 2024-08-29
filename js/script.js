import MenuMobile from './modules/menuMobile.js'
import Cardapio from './modules/services/cardapio.js';
import CardapioSearch from './modules/services/cardapioSearch.js';
import Promocao from './modules/services/promocao.js';
import Recomendados from './modules/services/recomendados.js';

const menuMobile = new MenuMobile();
menuMobile.init();

const cardapio = new Cardapio('../data/db.json');
const cardapioPrincipal = await cardapio.init();

const recomendados = new Recomendados(cardapioPrincipal).init();
const promocao = new Promocao(cardapioPrincipal).init();

const cardapioMostrar = new CardapioSearch(cardapioPrincipal).init()