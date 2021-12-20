<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>

    <!-- Usando a diretiva v-if para expresar um condição para tag ser mostrada -->
    <h2 v-if="foto._id" class="centralizado">Alterando</h2>
    <!-- Usando o v-else para executar o que não entrou na condição acima -->
    <h2 v-else class="centralizado">Incluindo</h2>

    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <!-- Usando o modificador .prevent para cancelar o comportamento padrão do evento -->
    <!-- Usando o v-model para fazer uma associação bidirecional, enviar e receber dados do data binding -->
    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>

        <!-- Usando o VeeValidate, dizendo que o campo é obrigatorio, que o minimo de caracteres é 3 e o maximo é 30 -->
        <input data-vv-as="título" name="titulo" v-validate data-vv-rules="required|min:3|max:30" id="titulo" autocomplete="off"
            v-model.lazy="foto.titulo">
        <!-- Errors, tem problema no titulo? Se sim me mostra a mensagem de erro, se não prossiga -->
        <span class="erro" v-show="errors.has('titulo')">{{ errors.first('titulo') }}</span>
      </div>

        <!-- Usando o modificador .lazy para atualizar o valor digitado no input apenas quando sair do campo -->
      <div class="controle">
        <label for="url">URL</label>
        <input name="url" v-validate data-vv-rules="required" id="url" autocomplete="off"
            v-model.lazy="foto.url">
        <span class="erro"  v-show="errors.has('url')">{{ errors.first('url') }}</span>
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
        <!-- Fazendo um bind no atributo to e chamando a rota home através do name dela -->
        <router-link :to="{ name: 'home' }"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';
import Foto from '../../domain/foto/Foto'
import FotoService from '../../domain/foto/FotoService'

export default {

  components: {
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data(){
    return{
        foto: new Foto(),
        id: this.$route.params.id //Definindo o valor da propriedade com o valor do parametro que foi passado na url
    }
  },

  methods: {
    grava(){
      this.$validator.validateAll().then(success => {
        if(success) {
          this.service.cadastra(this.foto) //Chamando o método cadastra que irá me retornar uma promesa que os dados serão inseridos
            .then(() => {
              if(this.id)
                //O router é aquele que navega entre as rotas
                this.$router.push({name: 'home'}) //Usando o $router para navegar para a rota home
              this.foto = new Foto()
            }, err => console.log(err)) //Se tudo der certo, ele limpa o formulario, se der errado ele irá exibir o erro no console
        }
      })
    }
  },

  created(){ //Instanciando a class FotoService passando como parametro a propriedade this.$resource
    this.service = new FotoService(this.$resource)

    if(this.id){ //Se tiver sido passado um parametro id na URL, faça
      this.service.busca(this.id).then(foto => this.foto = foto) //Executando o método busca, passando o id da url como parametro, ele me retorna uma promesa, se for sucesso, this.foto recebe os dados retornado pela API
    }
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

  .erro{
    color: red
  }

</style>