import { IsNotEmpty, IsOptional, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventWishListDto {
    @ApiProperty({
        description: 'ID of the event',
        example: 'uuid-event',
    })
    @IsNotEmpty()
    @IsString()
    eventId: string;

    @ApiProperty({
        description: 'ID of the wishlist item',
        example: 'uuid-wishlist',
    })
    @IsNotEmpty()
    @IsString()
    wishListId: string;

    @ApiProperty({
        description: 'Selected quantity for the event',
        example: 1,
        required: false,
    })
    @IsOptional()
    @IsNumber()
    selectedQuantity?: number;

    @ApiProperty({
        description: 'Customization details if any',
        example: 'Black model preferred',
        required: false,
    })
    @IsOptional()
    @IsString()
    customization?: string;
}