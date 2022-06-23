class Produtos {
    descricao: string
    valorUnitario: number
    qtdEstoque: number

    constructor (descricao: string, valorUnitario:number, qtdEstoque:number){
        this.descricao = descricao
        this.valorUnitario = valorUnitario
        this.qtdEstoque = qtdEstoque
    }

    getEstoque():number{
        return this.qtdEstoque
    }

    precoComDesconto(taxa:number):number{
        let precoDesc = this.valorUnitario - (this.valorUnitario * taxa/100)
        return precoDesc
    }

    precoComAcrescimo(taxa:number): number{
        let precoAcresc = this.valorUnitario + (this.valorUnitario * taxa/100)
        return precoAcresc
    }

}

export default Produtos
