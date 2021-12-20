import Cadastro from './components/cadastro/Cadastro.vue'
import Home from './components/home/Home.vue'

export const routes = [
    //Usando rotas nomeadas
    //Adicionando a propriedade menu
    {path: '', name:'home', component: Home, titulo: "Home", menu: true},
    {path: '/cadastro', name:'cadastro', component: Cadastro, titulo: "Cadastro", menu: true},
    //Adicionando uma rota para que se alguem entrar em uma rota inesistente, seja redirecionado para home
    {path: '*', component: Home, menu: false}
]