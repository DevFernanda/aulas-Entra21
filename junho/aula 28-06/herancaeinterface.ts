interface ICrud {
    salvar():boolean
    update(id:number):boolean
    delete(id:number):void
    consultar(id?:number):string
}

class Produto {
    descricao:string = ''
    preco: number = 0

}

class ProdutoFinal extends Produto implements ICrud{
    
    salvar(): boolean {
        throw new Error("Method not implemented.");
    }
    update(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
    consultar(id?: number): string {
        return `Consultando por ${id}`
    }
}

let produto1 = new ProdutoFinal()
produto1.descricao = 'Feijão'
produto1.preco = 10
console.log(produto1.consultar());
console.log(produto1.preco);
 

let produto2 = new ProdutoFinal()
console.log(produto2.consultar(10));
 