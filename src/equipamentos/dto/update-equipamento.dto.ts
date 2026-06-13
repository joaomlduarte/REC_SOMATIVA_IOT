import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateEquipamentoDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nome?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  descricao?: string;

  @IsOptional()
  @IsString()
  imagemUrl?: string;
}