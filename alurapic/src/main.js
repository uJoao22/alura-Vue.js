import Vue from 'vue' //Importando o Global View Object
import App from './App.vue'

import VueResource from 'vue-resource' //Importando o modulo Vue-resource
import VueRouter from 'vue-router' //Importando o modulo Vue-Router

import { routes } from './routes'

import './directives/Transform' //Fazendo com que a diretiva Transform seja carregada

Vue.use(VueResource) //Registrando o VueResource usando o Global Viw Object
Vue.http.options.root = "http://localhost:3000"
Vue.use(VueRouter) //Registrando o VueRouter usando o Global View Object

const router = new VueRouter({ //Instanciando a VueRouter
  routes: routes, //E passando para ele um objeto JS com a propriedade routes
  mode: 'history' //Aplicando para remover a # da url
})

new Vue({ //Instancia de global view object
  el: '#app',
  router: router,
  render: h => h(App) //Renderizanndo o componente HTML
})
