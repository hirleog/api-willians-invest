// src/formulario/formulario.controller.ts
import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { FormService } from './form.service';
import { UpdateFormDto } from './dto/update-form.dto';

@Controller('form')
export class FormController {
  constructor(private readonly formularioService: FormService) {}

  @Post()
  create(@Body() data: any) {
    try {
      return this.formularioService.create(data);
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error details',
        error:
          process.env.NODE_ENV === 'development'
            ? {
                message: error.message,
                stack: error.stack,
                fullError: error,
              }
            : null,
      };
    }
  }

  @Get()
  findAll() {
    try {
      return this.formularioService.findAll();
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error details',
        error:
          process.env.NODE_ENV === 'development'
            ? {
                message: error.message,
                stack: error.stack,
                fullError: error,
              }
            : null,
      };
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    return this.formularioService.update(Number(id), updateFormDto);
  }
}
