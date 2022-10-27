import { detailsEntity } from './../Entity/detais.entity';
export declare class sale {
    id: number;
    date: Date;
    total: number;
    id_user: number;
    details: detailsEntity[];
}
