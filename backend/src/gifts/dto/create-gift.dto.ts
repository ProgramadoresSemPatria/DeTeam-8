import { IsNotEmpty, IsOptional, IsString, IsBoolean, IsUUID, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGiftDto {
    @ApiProperty({
        description: 'Name of the gift',
        example: 'Product gift',
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Description of the gift',
        example: 'A high-tech smart watch with various features',
    })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({
        description: 'Price of the gift',
        example: '000.00',
        required: false,
    })
    @IsOptional()
    @IsString()
    price?: string;

    @ApiProperty({
        description: 'URL of the product associated with the gift',
        example: 'https://example.com/product',
        required: false,
    })
    @IsOptional()
    @IsUrl()
    productUrl?: string;

    @ApiProperty({
        description: 'Indicates if the gift has been claimed',
        example: false,
    })
    @IsNotEmpty()
    @IsBoolean()
    isClaimed: boolean;

    @ApiProperty({
        description: 'UUID of the event associated with the gift',
        example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    })
    @IsNotEmpty()
    @IsUUID()
    eventId: string;
}
