import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Medico {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    especialidade: string

    @Column()
    telefone: string

    @Column()
    endereco: string
}

export default Medico