export default class FotoService{
    constructor(resource){
        this._resource = resource('v1/fotos{/id}')
    }

    lista(){
        //A função query busca os dado na API e retorna uma promesa, se os dados forem retornados com sucesso, eles serão convertidos para JSON e retornaram outra promesa quando o método for chamado
        return this._resource.query().then(res => res.json(), err => {
            console.log(err)
            throw new Error("Não foi possível obter as fotos. Tente mais tarde")
        })
    }

    cadastra(foto){

        if(foto._id)
            return this._resource.update({id: foto._id}, foto) //O update atualiza os dados da API, recebendo como primeiro parametro o id da foto que será alterada, e como segundo, recebe os dados que serão alterados
        else
            return this._resource.save(foto) //A função save recebe os dados da foto como parametro e insere elas na API
    }

    apaga(id){
        // A função delete recebe como parametro o id da foto que será usado para apagar a foto na API e retorna um promesa que a foto será excluida
        return this._resource.delete({id: id})
            .then(null, err => { //O delete não me retorna nada no then, então defino null, mas pode me dar erro
                console.log(err)
                throw new Error("Não foi possível remover a foto")
            })
    }

    busca(id){
        return this._resource.get({ id }).then(res => res.json()) //Executando uma ação do tipo get para me retornar o item na API que possui o mesmo id informado no parametro do get
    }
}