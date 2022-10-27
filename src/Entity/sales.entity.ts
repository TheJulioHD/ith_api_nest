import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {detailsEntity} from './../Entity/detais.entity'
@Entity()
export class sale{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;
    @Column()
    total: number;
    @Column({default : null})
    id_user: number;
    @OneToMany(() => detailsEntity, (details) => details.idsale)
    details: detailsEntity[];
}