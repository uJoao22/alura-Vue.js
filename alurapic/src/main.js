import Vue from 'vue' //Global View Object
import App from './App.vue'

new Vue({ //Instancia de global view object
  el: '#app',
  render: h => h(App) //Renderizanndo o componente HTML
})
