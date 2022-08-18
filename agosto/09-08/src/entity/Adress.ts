import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { User } from './User'

@Entity("tb_adress")
export class Adress {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rua: string

    @Column()
    numero: number

    @Column()
    complemento: string

    @Column()
    bairro: string

    @Column()
    cidade: String
    
    @Column()
    cep: String

    //agregação
     

    @OneToOne(() => User)
    @JoinColumn({name: 'user_id'})
    users: User

}