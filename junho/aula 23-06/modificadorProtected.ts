class Pessoa{
    nome: string = ''
    protected identificador:number = 0 // pode ser visto nas classes filhas
    private idade:number = 0 // só fica na classe que foi declarado

    setIdentificador(id:number):void{
        this.identificador = id
    }
    setIdade(idade:number):void {
        this.idade = idade
    }

}
let pessoa:Pessoa
pessoa = new Pessoa()
pessoa.nome = 'Fernanda'
pessoa.setIdentificador(1000)
console.log(pessoa);

class Aluno extends Pessoa{
    media:number = 0
// setIdade(idade:number):void{
//this.
//}
}

let aluno = new Aluno()
aluno.media = 10
aluno.setIdentificador(125)
aluno.setIdade(15)
console.log(aluno);




