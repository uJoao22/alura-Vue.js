import Cadastro from './components/cadastro/Cadastro.vue'
import Home from './components/home/Home.vue'

export const routes = [
    {path: '', component: Home, titulo: "Home"}, //Quando coloco o path em branco ele joga na rota /
    {path: '/cadastro', component: Cadastro, titulo: "Cadastro"} //Criando a rota para cadastro
]