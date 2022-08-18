import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm"
import Carrinho from "./Carrinho"
import Cliente from "./Cliente"

@Entity()
export class Venda {
    @PrimaryGeneratedColumn()
    id_venda: number

    @Column()
    data: string

    @Column()
    status: string

    @ManyToOne(() => Cliente)
    @JoinColumn({name: 'id_cliente'})
    idcliente: Cliente
}


export default Venda