class Employe {
    empCode: number = 0
    empName: string = ''
    private empMatricula: string = '' // selado ou encapsulado
    
    constructor(code:number, name:string, matricula:string){
        this.empCode = code
        this.empName = name
        // this.empMatricula = matricula
        this.setMatricula(matricula)
    }

    setMatricula(matricula:string): void {
        if (matricula.length < 5){
            console.log(`número de matrícula deve ter no mínimo 5 dígitos`);
        } else {
            this.empMatricula = matricula
        }
    }
}

let emp1: Employe
emp1 = new Employe(10, 'Fernanda Mattiello', '123')

// emp1.empCode = 10
// emp1.empName = 'Fernanda Mattiello'
// emp1.setMatricula('1202')

console.log(emp1);
