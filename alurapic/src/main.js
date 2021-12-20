import Vue from 'vue' //Importando o Global View Object
import App from './App.vue'
import VueResource from 'vue-resource' //Importando o modulo Vue-resource
import VueRouter from 'vue-router' //Importando o modulo Vue-Router
import { routes } from './routes'
import './directives/Transform' //Fazendo com que a diretiva Transform seja carregada
import VeeValidate, {Validator} from 'vee-validate' //IMportando o modulo Vee-Validade
import msg from './pt_BR'
import 'bootstrap/dist/css/bootstrap.css' //Fazendo com que o Bootstrap seja carregado

Vue.use(VueResource) //Registrando o VueResource usando o Global Viw Object
Vue.http.options.root = "http://localhost:3000"
Vue.use(VueRouter) //Registrando o VueRouter usando o Global View Object

const router = new VueRouter({ //Instanciando a VueRouter
  routes: routes, //E passando para ele um objeto JS com a propriedade routes
  mode: 'history' //Aplicando para remover a # da url
})

Validator.localize({ pt_BR: msg })
Vue.use(VeeValidate, {locale: 'pt_BR'}) //Registrando o VeeValidade usando o Global View Object e definindo o idioma como pt_BR

new Vue({ //Instancia de global view object
  el: '#app',
  router: router,
  render: h => h(App) //Renderizanndo o componente HTML
})
