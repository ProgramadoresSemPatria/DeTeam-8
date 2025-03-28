import { EventEntity } from "src/events/entities/event.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("gifts")
export class Gift {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ nullable: true })
    price: string;

    @Column({ name: 'product_url', nullable: true })
    productUrl: string;

    @Column({ name: 'is_claimed' })
    isClaimed: string;

    @Column({ type: 'uuid', name: 'event_id' })
    eventId: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    deletedAt: Date;

    @ManyToOne(() => EventEntity, event => event.gifts)
    @JoinColumn({ name: 'event_id' })
    event: EventEntity;
}
