<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <!-- Usando o modificador .prevent para cancelar o comportamento padrão do evento -->
    <!-- Usando o v-model para fazer uma associação bidirecional, enviar e receber dados do data binding -->
    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off"
            v-model.lazy="foto.titulo">
      </div>

        <!-- Usando o modificador .lazy para atualizar o valor digitado no input apenas quando sair do campo -->
      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off"
            v-model.lazy="foto.url">
        <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo"/>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off"
            v-model="foto.descricao">
        </textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link to="/"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';
import Foto from '../../domain/foto/Foto'

export default {

  components: {
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data(){
    return{
        foto: new Foto()
    }
  },

  methods: {
    grava(){
        //Enviando dados para API com o conceito REST usando o método POST
        //Sintaxe: .post('para onde vai enviar os dados', os dados)

        this.resource.save(this.foto)  //Usando o save para inserir itens na API, funciona como o POST
          .then(() => this.foto = new Foto(), err => console.log(err)) //Se tudo der certo, ele limpa o formulario, se der errado ele irá exibir o erro no console
    }
  },

  created(){ //Usando da função created para criar a proopriedade resource com a url da API toda vez que um componente é criado, carregado
    this.resource = this.$resource('v1/fotos')
  }

}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px;
  }

  .centralizado {
    text-align: center;
  }

</style>