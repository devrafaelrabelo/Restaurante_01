import MenuMobile from './modules/menuMobile.js'
import Cardapio from './modules/services/cardapio.js';
import CardapioSearch from './modules/services/cardapioSearch.js';
import Carrinho from './modules/services/carrinho.js';
import Painel from './modules/services/painel.js';
import Pedido from './modules/services/pedido.js';
import PaginaProduto from './modules/services/produtopagina.js';
import Promocao from './modules/services/promocao.js';
import Recomendados from './modules/services/recomendados.js';

const menuMobile = new MenuMobile();
menuMobile.init();

const cardapio = new Cardapio('../data/db.json');
const cardapioPrincipal = await cardapio.init();

const recomendados = new Recomendados(cardapioPrincipal).init();
const promocao = new Promocao(cardapioPrincipal).init();

const cardapioMostrar = new CardapioSearch(cardapioPrincipal).init()

const paginaProduto = new PaginaProduto(cardapioPrincipal).init()

const carrinho = new Carrinho().init()

const painel = new Painel().init()
