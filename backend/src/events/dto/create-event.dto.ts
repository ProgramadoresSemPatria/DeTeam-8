import { IsNotEmpty, IsString, IsDate, IsEnum, IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export type EventType = 'public' | 'private';

export class CreateEventDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    date: Date;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsEnum(['public', 'private'])
    type: EventType;

    @IsNotEmpty()
    @IsInt()
    maximumCapacity: number;
}