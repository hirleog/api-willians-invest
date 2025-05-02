import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateFormDto {
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;

  @Length(11, 11)
  cpf: string;

  @IsNotEmpty()
  telefone: string;
}
