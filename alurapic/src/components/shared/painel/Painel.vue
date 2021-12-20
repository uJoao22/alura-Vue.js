<template>
        <div class="painel">
            <!-- QUando eu clicar duas vezes no h2 abaio ele irá trocar o estado da propriedade visivael para seu oposto, para mostrar o painel ou ocultar -->
            <!-- Usando o atalho de 'v-on:' que é usar '@' -->
            <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>

            <!-- Aplicando o transition para aplicar determinadas classes em determinnado estado do painel, para faciliar no processo de animação -->
            <transition name="painel-fade">
                <!-- Aplicando o v-show que faz com que o elemento ganhe um "display none", mas para isso o v-show tem que estar aplicado em uma div pai do slot -->
                <div class="painel-corpo" v-show="visivel">
                    <!-- Usando slot no lugar da div para dizer onde a imagem inserida dentro de 'meu-painel' será colocar aqui no componente Paiel -->
                    <slot></slot>
                </div>
            </transition>
        </div>
</template>

<script>

export default {
    //Com a propriedade props, eu informo para a aplicação os dados que ela aceita receber, esses dados informado no props podem ser interpolados
    props: ['titulo'],

    data(){
        return{
            visivel: true //Criando a propriedade visivel para alterar o valor do campo
        }
    }

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
        height: 100%;
        vertical-align: top;
        text-align: center;
    }

    .painel-corpo{
        overflow: hidden;
    }

    .painel .painel-titulo {
        text-align: center;
        border: solid 2px;
        background: lightblue;
        margin: 0;
        padding: 10px;
        text-transform: uppercase;
    }

    .painel-titulo{
        cursor: pointer;
        user-select: none;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .painel-fade-enter, .painel-fade-leave-active{
        opacity: 0;
    }

    .painel-fade-enter-active, .painel-fade-leave-active{
        transition: opacity .5s
    }

</style>