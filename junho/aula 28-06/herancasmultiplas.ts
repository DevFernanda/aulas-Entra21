interface IAnimal {
    raca:string
    especie:string
    barulho(x:string): void;
}
interface IMamifero{
    quantidadeMamas:number
    getQtdLeite():number;
}

class Bicho implements IAnimal, IMamifero{
    quantidadeMamas: number = 10
    getQtdLeite(): number {
        return 10
    }
    raca: string = 'Piatã'
    especie: string = 'suina'
    
    barulho(x: string): void {
        console.log(`Barulho de ${x}`);
    }
    display(){
        console.log(`Raça: ${this.raca}`);
        console.log(`Especie: ${this.especie}`);
        console.log(`Nº mamas: ${this.quantidadeMamas}`);
    }
}
let bicho: Bicho
bicho = new Bicho()
bicho.barulho('Pocotó pocotó pocotó')
bicho.display()