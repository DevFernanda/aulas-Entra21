import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm"
import Produto from "./Produto"
import Venda from "./Venda"

@Entity()
export class Carrinho {
    @PrimaryGeneratedColumn()
    id_carrinho: number

    @Column()
    quantidade: number

    @Column()
    preco: number

    @ManyToOne(() => Venda)
    @JoinColumn({name: 'id_venda'})
    idvenda: Venda

    @ManyToOne(() => Produto)
    @JoinColumn({name: 'id_produto'})
    idproduto: Produto
   
}

export default Carrinho