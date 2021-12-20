export default class FotoService{
    constructor(resource){
        this._resource = resource('v1/fotos{/id}')
    }

    lista(){
        //A função query busca os dado na API e retorna uma promesa, se os dados forem retornados com sucesso, eles serão convertidos para JSON e retornaram outra promesa quando o método for chamado
        return this._resource.query().then(res => res.json())
    }

    cadastra(foto){
        return this._resource.save(foto) //
    }

    apaga(id){
        // A função delete recebe como parametro o id da foto que será usado para apagar a foto na API e retorna um promesa que a foto será excluida
        return this._resource.delete({id: id})
    }
}