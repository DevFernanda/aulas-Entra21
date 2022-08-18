import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
// import { Adress } from "./Adress"

@Entity("tb_user")
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    idade: number

}