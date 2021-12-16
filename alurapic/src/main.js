import Vue from 'vue' //Importando o Global View Object
import App from './App.vue'

import VueResource from 'vue-resource' //Importando o modulo Vue-resource

Vue.use(VueResource) //Registrando o VueResource usando o Global View Object

new Vue({ //Instancia de global view object
  el: '#app',
  render: h => h(App) //Renderizanndo o componente HTML
})
