class Pessoa {
    id: number
    nome: string
    fone: string
    email: string
    peso: number
    altura:number
    
    constructor (id: number, nome:string, fone:string, email: string, peso: number, altura:number){
        this.id = id
        this.nome = nome
        this.fone = fone
        this.email = email
        this.peso = peso
        this.altura = altura
    }

    salvar(): string{
        return `Cliente ${this.nome} salvo com sucesso!`        
    }

    validarDados(): boolean {
        if (this.id < 0){
            console.log(`Informe o id`); 
            return false    
        } else if (this.fone ==''){
            console.log(`Informe o fone`);
            return false
        } else if (this.email == ''){
            console.log(`Informe o e-mail`);
            return false
        } else if (this.nome == '') {
            console.log(`Informe o nome`);
            return false
        } else if (this.peso < 0){
            console.log(`Informe o peso`);
            return false
        } else if (this.altura < 0){
            console.log(`Informe a altura`);
            return false 
        } return true
    }

    calculoImc(): number {
        return parseFloat((this.peso / (this.altura*this.altura)).toFixed(2))
    }

    imprimirDados(): void{
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Fone: ${this.fone}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Peso: ${this.peso}`);
        console.log(`Altura: ${this.altura}`);
        console.log(`O IMC de ${this.nome} é ${this.calculoImc()}`);
        console.log(` `);
    }
}


export {Pessoa}