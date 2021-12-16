<template>
        <div class="painel">
          <h2 class="painel-titulo">{{ titulo }}</h2>
          <!-- Usando slot no lugar da div para dizer onde a imagem inserida dentro de 'meu-painel' será colocar aqui no componente Paiel -->
          <slot class="painel-corpo"></slot>
        </div>
</template>

<script>
export default {
    //Com a propriedade props, eu informo para a aplicação os dados que ela aceita receber, esses dados informado no props podem ser interpolados
    props: ['titulo']

};
</script>

// Defiido um Escopo para o estilo, para que apenas os itens dele sofressem a alteração do css
<style scoped>
   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 300px;
    vertical-align: top;
    text-align: center;
  }

  .painel-corpo{
    height: 230px;
    display: flex;
    align-items: center;
  }

  .painel .painel-titulo {
    border: solid 2px;
    background: lightblue;
    margin: 0 0 0px 0;
    padding: 10px;
    height: 50px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center
  }
</style>