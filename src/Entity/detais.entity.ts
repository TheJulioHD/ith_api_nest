import { sale } from 'src/Entity/sales.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class detailsEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product: string;
    @Column() 
    quantity: number;
    @Column()
    unit_price: number;
    @ManyToOne(() => sale, (sale) => sale.details)
    @JoinColumn({name:'idsale'})
    idsale: number;
}