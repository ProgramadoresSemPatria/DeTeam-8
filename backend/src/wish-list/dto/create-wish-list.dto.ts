import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWishListDto {
    @ApiProperty({
        description: 'Title of the wishlist item',
        example: 'Projector',
    })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({
        description: 'Description of the wishlist item',
        example: 'High quality projector for presentations',
        required: false,
    })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({
        description: 'Category of the wishlist item',
        example: 'Equipment',
        required: false,
    })
    @IsOptional()
    @IsString()
    category?: string;

    @ApiProperty({
        description: 'Desired quantity for the wishlist item',
        example: 1,
        required: false,
    })
    @IsOptional()
    @IsNumber()
    quantity?: number;

    @ApiProperty({
        description: 'Priority level of the wishlist item',
        example: 'high',
        required: false,
    })
    @IsOptional()
    @IsString()
    priority?: string;
}
