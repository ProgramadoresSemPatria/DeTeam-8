import { IsNotEmpty, IsEmail, IsUUID, MaxLength, IsOptional } from 'class-validator';

export class CreateGuestDto {
    @IsOptional()
    @IsUUID()
    userId?: string;

    @IsNotEmpty()
    @IsUUID()
    eventId: string;

    @IsNotEmpty()
    @MaxLength(150)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
