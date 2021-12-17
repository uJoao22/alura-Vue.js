<template>
    <!-- Quando eu clicar nesse botão ele chama o método disparaAcao -->
    <!-- Atribuindo a class botao e a computedPropet estiloDoBotao -->
    <button @click="disparaAcao()" :type="tipo" class="botao" :class="estiloDoBotao">{{ rotulo }}</button>
</template>

<script>
export default {
    props: ['tipo', 'rotulo', 'confirmacao', 'estilo'],

    methods: {
        disparaAcao(){
            if(this.confirmacao ){ //Se precisar de confirmação, faça
                if(confirm("Confirma operação?")) //Se a operação for confirmada ele irá acionar o evento botaoAtivado usando o $emit
                    this.$emit('botaoAtivado')
                return
            }
            this.$emit('botaoAtivado') //Se não precisar de confirmação, execute

        }
    },

    computed: {
        estiloDoBotao(){
            if(this.estilo == "padrao" || this.estilo != "perigo") //Se estilo igual a padrão ou vazio, faça
                return "botao-padrao"
            if(this.estilo == "perigo") //Se estilo igual a perigo, faça
                return "botao-perigo"
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