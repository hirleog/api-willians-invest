import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateFormDto {
  @IsBoolean()
  @IsOptional()
  contatado: boolean;

  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;

  @Length(11, 11)
  cpf: string;

  @IsNotEmpty()
  telefone: string;

  @IsString()
  @IsOptional()
  observacao: string;
}
