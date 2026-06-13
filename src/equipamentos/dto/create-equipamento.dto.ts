import { isNotEmpty, IsNotEmpty, IsOptional, isString, IsString, minLength, MinLength } from "class-validator";

export class CreateEquipamentoDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    nome!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    descricao!: string;

    @IsOptional()
    @IsString()
    imagemUrl?: string;
}