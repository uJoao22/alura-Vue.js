import Vue from 'vue' //Importando o Global View Object

//Criado a minha diretiva a partir do Global View Object
Vue.directive('meu-transform', { //No primeiro parametro declara o nome da diretiva, no segundo, um objeto JS, com as configuraçãoes desta diretiva

    //O bind é um hook que é sempre chamado quando a diretiva se prende ao DOM
    //Ele recebe 3 parametro, o primeiro é uma referencia ao elemento do DOM ao qual a diretiva foi associada,
    bind(el, binding, vnode){
        let current = 0

        //Toda vez que eu clicar duas vezez em algum dos elemento do el, ele executa a função
        el.addEventListener('dblclick', function() {
            current+=90 //Toda vez que clicar duas vezes o currente recebe o valor dele mais 90, para sem girar 90 graus ao clicar
            el.style.transform = `rotate(${current}deg)`
        })
    }

})