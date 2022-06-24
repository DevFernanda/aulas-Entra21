class Animal {
    raca: string = ''
    especie: string = ''
}

let animal: Animal 
animal = new Animal()
animal.raca = 'Ruim'
animal.especie = 'Pintcher'

class Mamifero extends Animal{
    numeroMamas:number=0
}

let mamifero: Mamifero
mamifero = new Mamifero()
mamifero.numeroMamas = 8
mamifero.raca = 'Pitbull'
mamifero.especie = 'Canina'

class Cachorro extends Mamifero{
    cor:string = ''
}

let canino = new Cachorro()
canino.cor = 'malhado'
canino.raca = 'dalmata'
canino.especie = 'canino'
canino.numeroMamas = 8
