// src/formulario/formulario.controller.ts
import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { FormService } from './form.service';
import { UpdateFormDto } from './dto/update-form.dto';

@Controller('form')
export class FormController {
  constructor(private readonly formularioService: FormService) {}

  @Post()
  create(@Body() data: any) {
    return this.formularioService.create(data);
  }

  @Get()
  findAll() {
    return this.formularioService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    return this.formularioService.update(Number(id), updateFormDto);
  }
}
