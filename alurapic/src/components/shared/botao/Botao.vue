<template>
    <button :type="tipo" class="botao botao-perigo">{{ rotulo }}</button>
</template>

<script>
export default {
    props: ['tipo', 'rotulo']
}
</script>

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
        cursor: pointer;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>