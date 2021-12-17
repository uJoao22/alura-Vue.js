<template>

    <nav>
      <ul>
        <li v-for="(route, index) of rotas" :key="index">
          <!-- Usando o router-link para me redirecionar para um endereço sem atualizar a página -->
          <router-link :to="route.path ? route.path : '/'"> {{ route.titulo }} </router-link>
        </li>
      </ul>
    </nav>

</template>

<script>
export default {
    props: {
        rotas: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>