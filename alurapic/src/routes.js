import Cadastro from './components/cadastro/Cadastro.vue'
import Home from './components/home/Home.vue'

export const routes = [
    {path: '', component: Home}, //Quando coloco o path em branco ele me joga na rota /
    {path: '/cadastro', component: Cadastro} //Criando a rota para cadastro
]