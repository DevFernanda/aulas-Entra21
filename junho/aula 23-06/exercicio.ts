class animaisVertebrados {
    seres: string = 'eucariontes'
    organismo: string = 'multicelular'
    alimentacao: string = 'heterotróficos'
    respiracao: string = 'aeróbica'

    constructor (seres:string, organismo:string, alimentacao:string, respiracao:string){
        this.seres = seres
        this.organismo = organismo
        this.alimentacao = alimentacao
        this.respiracao = respiracao
    }
}

class Mamiferos extends animaisVertebrados {
    corpo: string = 'Pelos no corpo'
    alimentaFilhotes: string = 'Mamas'
    temperatura: string = 'Regulam a temperatura'
    respiram: string = 'Pulmão'

    constructor(seres:string, organismo:string, alimentacao:string, respiracao:string, corpo:string, alimentaFilhotes:string, temperatura:string, respiram:string){
        super(seres, organismo, alimentacao, respiracao)
        this.corpo = corpo
        this.alimentaFilhotes = alimentaFilhotes
        this.temperatura = temperatura
        this.respiram = respiram
    }
}

class Peixes extends animaisVertebrados {
    corpo: string = 'Escamas no corpo'
    respiram: string = 'Brônquios'

    constructor(seres:string, organismo:string, alimentacao:string, respiracao:string, corpo:string, respiram:string) {
        super(seres, organismo, alimentacao, respiracao)
        this.corpo = corpo
        this.respiram = respiram
    }
}

let lambari = new Peixes ('eucariontes', 'multicelular', 'heterotróficos', 'aeróbica', 'Escamas no corpo', 'Brônquios')
let cachorro = new Mamiferos('eucariontes', 'multicelulares', 'heterotróficos', 'aeróbica', 'Pelos no corpo', 'Mamas', 'Controlas sua temperatura', 'pulmão')

console.log(lambari);
console.log(cachorro);



