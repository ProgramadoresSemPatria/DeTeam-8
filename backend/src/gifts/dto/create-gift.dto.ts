import { IsNotEmpty, IsOptional, IsString, IsBoolean, IsUUID, IsUrl } from 'class-validator';

export class CreateGiftDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    price?: string;

    @IsOptional()
    @IsUrl()
    productUrl?: string;

    @IsNotEmpty()
    @IsBoolean()
    isClaimed: boolean;

    @IsNotEmpty()
    @IsUUID()
    eventId: string;
}
