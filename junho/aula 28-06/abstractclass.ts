abstract class Computador {
    memoria: number = 4
    abstract getCapacidadeProcessamento():number
    display():void{
        console.log(this.memoria)
    }
} 
class Notebook extends Computador{
    getCapacidadeProcessamento(): number {
        return 500
    }

}

class Tablet extends Computador {
    getCapacidadeProcessamento(): number {
        return 200
    }
}

let cp1: Computador
cp1 = new Notebook()

let cp2: Computador
cp2 = new Tablet()