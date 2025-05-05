import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateFormDto {
  @IsOptional()
  @IsBoolean()
  contatado?: boolean;

  @IsOptional()
  @IsString()
  observacao?: string;
}
