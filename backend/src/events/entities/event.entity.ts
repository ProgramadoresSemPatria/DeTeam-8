import { Guest } from "src/guests/entities/guest.entity";
import { User } from "src/user/entities/user.entity";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from "typeorm";

@Entity("events")
export class Event {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ type: "timestamp" })
    date: Date;

    @Column()
    location: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @Column({
        type: "enum",
        enum: ["public", "private"],
    })
    type: "public" | "private";

    @Column({ name: "maximum_capacity", nullable: true })
    maximumCapacity: number;

    @Column({ type: "uuid", name: "user_id" })
    userId: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at", nullable: true })
    deletedAt?: Date;

    @ManyToOne(() => User, user => user.events)
    @JoinColumn({ name: "user_id" })
    user: User;

    @OneToMany(() => Guest, guest => guest.event)
    guests: Guest[];
}
