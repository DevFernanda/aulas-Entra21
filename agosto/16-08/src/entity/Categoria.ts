import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import Produto from "./Produto"

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string
}

export default Categoria