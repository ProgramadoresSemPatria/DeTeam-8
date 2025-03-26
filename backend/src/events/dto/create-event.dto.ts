import {
    IsNotEmpty,
    IsOptional,
    IsUUID,
    IsEnum,
    IsDateString,
    MaxLength,
    IsInt
} from 'class-validator';

export class CreateEventDto {
    @IsNotEmpty()
    @MaxLength(255)
    name: string;

    @IsNotEmpty()
    @IsDateString()
    date: Date;

    @IsNotEmpty()
    @MaxLength(255)
    location: string;

    @IsOptional()
    description?: string;

    @IsNotEmpty()
    @IsEnum(["public", "private"])
    type: "public" | "private";

    @IsOptional()
    @IsInt()
    maximumCapacity?: number;

    @IsNotEmpty()
    @IsUUID()
    userId: string;
}
