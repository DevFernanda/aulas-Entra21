import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import Carrinho from "./Carrinho"

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id_produto: number

    @Column()
    descricao: string

    @Column()
    preco: number

    @Column()
    estoque: number

   
}

export default Produto

