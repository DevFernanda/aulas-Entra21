interface IFornecedor {
    id: number,
    nome: string
    email: string
    fone: string
    cpf: (string | number)
}

var fornecedor: IFornecedor = {id:0, nome:'', email:'', fone:'',cpf:''}

fornecedor.id = 10
fornecedor.nome = 'Antartica'
fornecedor.email = 'antarticafornecedor@gmail.com'
fornecedor.fone = '47997445125'
fornecedor.cpf = 12345678901

console.log(fornecedor);
