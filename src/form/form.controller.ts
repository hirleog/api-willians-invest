// src/formulario/formulario.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { FormService } from './form.service';

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
}
