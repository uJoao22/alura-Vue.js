<template>
  <!-- Quando possuir mais de um elemento na tag template, devo envolve-los em uma div -->
  <div class="corpo">
    <!-- Outra maneira de inserir textos dentro de uma tag: ' v-text="texto" ' -->
    <h1 class="titulo">{{ titulo }}</h1>

    <!-- Dentro de atributos não se pode usar interpolação, devo usar o v-bind antes do atributo, mas existe um atalho que é usar apenas ':' antes do atributo -->
    <ul class="lista-fotos">

      <!-- Usando a diretiva v-for para iterar um array, usando a ':key' para evitar o erro de sintaxe -->
      <!-- Os dados recebidos da API pela promessa do $http são iterados no li -->
      <li class="lista-fotos-item" v-for="(foto, index) of fotos" :key="index">

        <!-- Usado o compoente meu-painel que é importado -->
        <meu-painel :titulo="foto.titulo">
            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo" />
        </meu-painel>

      </li>

    </ul>

  </div>

</template>

<script>
//Importanndo o componente Painel
import Painel from './components/shared/painel/Painel.vue'

export default {

  //Atribuindo aos componentes que Painel importado agora pode ser usado como 'meu-painel'
  components: {
    'meu-painel': Painel
  },

  data() {
    //É na função data que fornecemos os dados que o template precisa

    return {
      titulo: "Alurapic",
      fotos: []
    };
  },

  created() {
    //Usando da função created para eecutar um bloco de código toda vez que o componente é criado
    //O componente '$http' vem do modulo VueResource
    //Fazendo uma requisição dos dados do determinado endereço, essa requisição irá me retornar uma promise
    let promise = this.$http.get("http://localhost:3000/v1/fotos");

    //Acessando os dados retornados pela promesa em caso de sucesso, convertendo os dados para JSON que me retorna uma promesa, e se essa promesa retornar sucesso, o array fotos criado em data recebe os dados da promesa, se der erro irá exibir o erro no connsole
    promise
      .then(res => res.json())
      .then(
        fotos => (this.fotos = fotos),
        err => console.log(err)
      );
  }
};
</script>

<style>
  .titulo {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }
</style>