export default {
    //O bind é um hook que é sempre chamado quando a diretiva se prende ao DOM
    //Ele recebe 3 parametro, o primeiro é uma referencia ao elemento do DOM ao qual a diretiva foi associada, o segundo é dados enviados da associação da diretiva no DOM para ca
    bind(el, binding, vnode){
        let current = 0

        //Toda vez que eu clicar duas vezez em algum dos elemento do el, ele executa a função
        el.addEventListener('dblclick', function() {
            let i = binding.value || 90 //Se o binding.value estiver configurado ele recebe seu valor, se não 90
            let efeito

            if(!binding.arg || binding.arg == 'rotate'){
                binding.modifiers.reverse ? current-=i : current+=i
                efeito = `rotate(${current}deg)`
            } else if(binding.arg == "scale")
                efeito = `scale(${i})`

            el.style.transform = efeito

            if(binding.modifiers.animate)
                el.style.transition = `transform 0.6s ease-in-out`
        })
    }
}