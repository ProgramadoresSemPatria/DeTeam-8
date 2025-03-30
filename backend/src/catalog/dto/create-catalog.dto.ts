import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatalogDto {
    @ApiProperty({
        description: 'Name of the catalog item',
        example: 'Projector',
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Description of the catalog item',
        example: 'High quality projector for presentations',
        required: false,
    })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({
        description: 'Category of the catalog item',
        example: 'Equipment',
        required: false,
    })
    @IsOptional()
    @IsString()
    category?: string;

    @ApiProperty({
        description: 'Default quantity for the catalog item',
        example: 1,
        required: false,
    })
    @IsOptional()
    @IsNumber()
    defaultQuantity?: number;
}