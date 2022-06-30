class Product {
    id:number
    descricao:string
    preco:number

    constructor(id:number, descricao:string, preco:number){
        this.id = id
        this.descricao = descricao
        this.preco = preco
    }
}

let produto1 = new Product(1, 'Feijão', 7.89)
let produto2 = new Product(2, 'Arroz', 5.49)


class ItemVenda {
    id: number
    produto: Product
    qtd: number

    constructor(id:number, produto:Product, qtd:number){
        this.id = id
        this.produto = produto
        this.qtd = qtd
    }
}

    let item1 = new ItemVenda(1, produto1, 10)
    let item2 = new ItemVenda(2, produto2, 6)

    console.log(item1);

class Venda {
    id: number
    itens: ItemVenda[]

    constructor(id:number, itens:ItemVenda[]){
        this.id = id
        this.itens = itens
    }
}

let venda1 = new Venda(1, [item1])
console.log(venda1, produto1);

    