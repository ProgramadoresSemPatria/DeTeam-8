import { IsNotEmpty, IsEmail, IsUUID, MaxLength, IsOptional, ValidateIf } from 'class-validator';

export class CreateGuestDto {
    @IsOptional()
    @IsUUID()
    userId?: string;

    @IsNotEmpty()
    @IsUUID()
    eventId: string;

    @ValidateIf((o) => !o.userId)
    @IsNotEmpty({ message: 'Name is required if not logged in' })
    @MaxLength(150)
    name: string;

    @ValidateIf((o) => !o.userId)
    @IsNotEmpty({ message: 'Email is required if not logged in' })
    @IsEmail()
    email: string;
}
