import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id_cliente: number

    @Column()
    nome: string

    @Column()
    fone: string

    @Column()
    email: string
}

export default Cliente