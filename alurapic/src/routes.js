import Cadastro from './components/cadastro/Cadastro.vue'
import Home from './components/home/Home.vue'

export const routes = [
    //Usando rotas nomeadas
    //Adicionando a propriedade menu
    {path: '', name:'home', component: Home, titulo: "Home", menu: true},
    {path: '/cadastro', name:'cadastro', component: Cadastro, titulo: "Cadastro", menu: true},

    //Inserindo um id na url, usando os ':', para dizer que caso cair ali será direcionado para aquela url
    {path: '/cadastro/:id', name:'altera', component: Cadastro, titulo: "Alterar", menu: false},

    //Adicionando uma rota para que se alguem entrar em uma rota inesistente, seja redirecionado para home
    {path: '*', component: Home, menu: false}
]