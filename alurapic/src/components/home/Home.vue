<template>
  <!-- Quando possuir mais de um elemento na tag template, devo envolve-los em uma div -->
  <div>
    <!-- Inserindo imagem locais no projeto -->
    <!-- <img src="/static/teste.png"> -->

    <!-- Outra maneira de inserir textos dentro de uma tag: ' v-text="texto" ' -->
    <h1 class="titulo">{{ titulo }}</h1>

    <p v-show="mensagem" class="titulo">{{ mensagem }}</p>

    <!-- Usando a diretiva 'v-on:' ou seu atalho '@' para chamar o evento do input, para que toda vez que o evento for acionado, o elemeto filtro definido em data receba o valor digitado no input -->
    <input type="search" class="filtro" placeholder="Filtre pelo titulo" @input="filtro = $event.target.value">
    {{ filtro }}

    <!-- Dentro de atributos não se pode usar interpolação, devo usar o v-bind antes do atributo, mas existe um atalho que é usar apenas ':' antes do atributo -->
    <ul class="lista-fotos">

      <!-- Usando a diretiva v-for para iterar um array, usando a ':key' para evitar o erro de sintaxe -->
      <!-- Os dados recebidos da API pela promessa do $http são iterados no li -->
      <li class="lista-fotos-item" v-for="(foto, index) of fotosComFiltro" :key="index">

        <!-- Usado o compoente meu-painel que é importado -->
        <meu-painel :titulo="foto.titulo">

          <!-- Associando a diretiva meu-transform ao componente imagem-responsisva -->
          <!-- Usando o modificadore de diretiva .animate -->
          <!-- Passando argumentos para a diretiva, como o :rotate -->
          <imagem-responsiva v-meu-transform:scale.animate="1.2" :url="foto.url" :titulo="foto.titulo"/>

          <!-- Enviando o parametro id para a rota cadastro, usando o params -->
          <router-link :to="{ name: 'altera', params: { id: foto._id } }">
            <meu-botao tipo="button" rotulo="ALTERAR"/>
          </router-link>

          <!-- O evento botaoAtivado é chamado quando o método disparaAcao do componente Botao o chama através da função ativa o click, chamando usando o $emit -->
          <meu-botao
            tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove(foto)"
            :confirmacao="true"
            estilo="perigo"
          />

        </meu-painel>

      </li>

    </ul>

  </div>

</template>

<script>
//Importando componentes
import Painel from '../shared/painel/Painel.vue'
import Imagem from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue'
import transform from '../../directives/Transform';
import FotoService from '../../domain/foto/FotoService'


export default {

  //Atribuindo aos componentes que Painel importado agora pode ser usado como 'meu-painel'
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': Imagem,
    'meu-botao': Botao
  },

  directives: {
    'meu-transform': transform
  },

  data() {
    //É na função data que fornecemos os dados que o template precisa

    return {
      titulo: "Alurapic",
      fotos: [],
      filtro: '',
      mensagem: ''
    };
  },

  //Criando uma computedPropets para executar uma lógica, ela cria propriedades com funçoes a serem executadas
  computed: {
    fotosComFiltro(){
      if(this.filtro) { //Se existir algo digitado na propriedade filtro, faça
        let exp = new RegExp(this.filtro.trim(), 'i') //Criando uma expressão regular para oque foi digitado usando o trim para remover os espaços em braco e definindo o i para ignorar se são letras maiusculas ou minusculas
        return this.fotos.filter(foto => exp.test(foto.titulo)) //Retornando o resultado de um filtro do array de listas, com a filtragem de que se o titulo daquela foto for igual a expressão regular em exp ele me retorna
      } else //Se não, se ela estiver em branco, faça
        return this.fotos //Retorne a propriedade fotos, com o array com todos o dados das fotos
    }
  },

  methods: { //Criando Métodos
    remove(foto){
      //Chamando o método apaga, passando para ele um o id da fotoo como valor da propriedade que será recebida no parametro da URL para excluir a foto correta na API
      this.service.apaga(foto._id)
        .then(() => {
          let i = this.fotos.indexOf(foto) //Pegando a posição o array em que a foto que será removida está
          this.fotos.splice(i,1) //Usando o splice para remover a foto do array
          this.mensagem = "Foto removida com sucesso"
        }, err => {
          cosole.log(err)
          this.mensagem = "Não foi possível remover a foto"
      })
    }
  },

  created() { //Usando da função created para executar um bloco de código toda vez que o componente é criado
    this.service = new FotoService(this.$resource) //Instanciando FotoService e passando como parametro a propriedade this.$resource

    this.service.lista() //Chamando o método lista da class FotoService
      .then(fotos => (this.fotos = fotos),err => this.mensagem = err.message) //Se retornar sucesso, ele irá inserir os dados da API na propriedade fotos, se der erro irá logar a mensagem de erro
  }
}
</script>

<style>
  .titulo {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro{
    display: block;
    width: 100%;
  }
</style>