import { IsNotEmpty, IsEmail, IsUUID, MaxLength, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGuestDto {
    @ApiProperty({
        description: 'User UUID of the guest (if logged in)',
        example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        required: false,
    })
    @IsOptional()
    @IsUUID()
    userId?: string;

    @ApiProperty({
        description: 'UUID of the event the guest is associated with',
        example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    })
    @IsNotEmpty()
    @IsUUID()
    eventId: string;

    @ApiProperty({
        description: 'Name of the guest',
        example: 'Name',
        maxLength: 150,
    })
    @IsNotEmpty()
    @MaxLength(150)
    name: string;

    @ApiProperty({
        description: 'Email of the guest',
        example: 'email@example.com',
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
