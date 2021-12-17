<template>
    <!-- Quando eu clicar nesse botão ele chama o método disparaAcao -->
    <button @click="disparaAcao()" :type="tipo" class="botao botao-perigo">{{ rotulo }}</button>
</template>

<script>
export default {
    props: ['tipo', 'rotulo'],

    methods: {
        disparaAcao(){
            if(confirm("Confirma operação?")) //Se a operação for confirmada ele irá acionar o evento botaoAtivado usando o $emit
                this.$emit('botaoAtivado')
        }
    }
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