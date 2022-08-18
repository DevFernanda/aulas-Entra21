import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { Categoria } from './Categoria'

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descricao: string

    @Column()
    preco: number

    @Column()
    estoque: number

    @ManyToOne(() => Categoria)
    @JoinColumn({name: 'categoria_id'})
    categoria: Categoria
}

export default Produto