import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EventType, EventStatus } from '../entities/event.entity';

export class CreateEventDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsDateString()
    date: string;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsEnum(EventType)
    type: EventType;

    @IsNotEmpty()
    @IsEnum(EventStatus)
    status: EventStatus;

    @IsNotEmpty()
    @IsString()
    imageUrl: string;

    @IsNotEmpty()
    @IsBoolean()
    isPublic: boolean;

    @IsNotEmpty()
    @IsString()
    userId: string;
}
