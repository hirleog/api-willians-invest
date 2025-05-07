// src/formulario/formulario.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FormService } from './form.service';
import { UpdateFormDto } from './dto/update-form.dto';
import { CreateFormDto } from './dto/create-form.dto';

@Controller('form')
export class FormController {
  constructor(private readonly formularioService: FormService) {}

  @Post()
  create(@Body() data: CreateFormDto) {
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

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.formularioService.remove(Number(id));
    } catch (error) {
      throw new HttpException(
        {
          statusCode: 500,
          message: 'Error deleting form entry',
          error:
            process.env.NODE_ENV === 'development'
              ? {
                  message: error.message,
                  stack: error.stack,
                  fullError: error,
                }
              : null,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
