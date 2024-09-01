import MenuMobile from './modules/menuMobile.js'
import Cardapio from './modules/services/cardapio.js';
import CardapioSearch from './modules/services/cardapioSearch.js';
import Carrinho from './modules/services/carrinho.js';
import LoginModal from './modules/login.js';
import Painel from './modules/services/painel.js';
import PaginaProduto from './modules/services/produtopagina.js';
import Promocao from './modules/services/promocao.js';
import Recomendados from './modules/services/recomendados.js';
import ValidacaoUsuario from './modules/services/validacaoUsuario.js';
import LogoffUser from "./modules/services/logoffUser.js";
import PainelVendedor from './modules/services/painelVendedor.js';


const menuMobile = new MenuMobile();
menuMobile.init();

const cardapio = new Cardapio('./data/db.json');
const cardapioPrincipal = await cardapio.init();

const recomendados = new Recomendados(cardapioPrincipal).init();
const promocao = new Promocao(cardapioPrincipal).init();

const cardapioMostrar = new CardapioSearch(cardapioPrincipal).init()

const paginaProduto = new PaginaProduto(cardapioPrincipal).init()

const carrinho = new Carrinho().init()

const login = new LoginModal().init()

const logoff = new LogoffUser().init()

const users = [
  {
    "nome": "Rafael Rabelo",
    "user": "q",
    "passwd": "q"
  },
  {
    "nome": "Oscar Rabelo",
    "user": "w",
    "passwd": "w"
  },
  {
    "nome": "Roger Rabelo",
    "user": "e",
    "passwd": "e"
  },
  {
    "nome": "Violeta Rabelo",
    "user": "r",
    "passwd": "r"
  },
  {
    "nome": "Empresa X",
    "user": "a",
    "passwd": "a"
  }
]

localStorage.setItem('usuarios', JSON.stringify(users))

const validacaoUsuario = new ValidacaoUsuario().init()

const painel = new Painel().init()

const painelVendedor = new PainelVendedor().init()