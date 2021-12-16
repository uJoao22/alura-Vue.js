<template> <!-- Quando possuir mais de um elemento na tag template, devo envolve-los em uma div -->
  <div>
    <!-- Outra maneira de inserir textos dentro de uma tag: ' v-text="texto" ' -->
    <h1>{{ titulo }}</h1>

    <!-- Dentro de atributos não se pode usar interpolação, devo usar o v-bind antes do atributo, mas existe um atalho que é usar apenas ':' antes do atributo -->
    <ul>
      <!-- Usando a diretiva v-for para iterar um array, usando a ':key' para evitar o erro de sintaxe -->
      <li v-for="(foto, index) of fotos" :key="index">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>

  </div>
</template>

<script>
export default {

  data(){

    return {
      titulo: "Alurapic",
      fotos: [{
        url: "https://tudovet.com.br/blog/wp-content/uploads/2018/11/expectativa-de-vida-cachorro-845x423.jpg",
        titulo: "cachorro"
      },
      {
        url: "https://www.petz.com.br/blog/wp-content/uploads/2021/02/raca-de-cachorro-grande-2-1280x720.jpg  ",
        titulo: "Cachorrão"
      }]
    }

  }
}
</script>

<style>

</style>