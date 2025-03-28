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
    image_url: string;

    @IsNotEmpty()
    @IsBoolean()
    is_public: boolean;

    @IsNotEmpty()
    @IsString()
    user_id: string;
}
