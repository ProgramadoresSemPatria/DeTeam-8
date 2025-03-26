import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm';
import { Event } from 'src/events/entities/event.entity';
import { User } from 'src/user/entities/user.entity';

@Entity('guests')
export class Guest {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 150 })
    name: string;

    @Column({ length: 100 })
    email: string;

    @Column({ type: 'uuid', nullable: true, name: 'user_id' })
    userId?: string;

    @Column({ type: 'uuid', name: 'event_id' })
    eventId: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
    deletedAt?: Date;

    @ManyToOne(() => Event, event => event.guests)
    @JoinColumn({ name: 'event_id' })
    event: Event;

    @ManyToOne(() => User, user => user.guests, { nullable: true })
    @JoinColumn({ name: 'user_id' })
    user?: User;
}
