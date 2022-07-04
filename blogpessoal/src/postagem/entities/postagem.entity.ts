import { Tema } from "src/tema/entities/tema.entity"
import { Usuario } from "src/usuario/entities/usuario.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: "tb_postagens"})
export class Postagem {

    @PrimaryGeneratedColumn()    
    id: number

    @Column({length: 100, nullable: false})
    titulo: string

    @Column({length: 1000, nullable: false})
    texto: string

    @UpdateDateColumn()
    data: Date
    
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema
    
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario

}


