// src/formulario/formulario.service.ts
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateFormDto } from './dto/update-form.dto';

@Injectable()
export class FormService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.FormularioCreateInput) {
    return this.prisma.formulario.create({ data });
  }

  async findAll() {
    return this.prisma.formulario.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async update(id: number, data: UpdateFormDto) {
    return this.prisma.formulario.update({
      where: { id },
      data: {
        contatado: data.contatado,
        observacao: data.observacao,
      },
    });
  }

  async remove(id: number): Promise<void> {
    const form = await this.prisma.formulario.findUnique({ where: { id } });

    if (!form) {
      throw new Error(`Form with ID ${id} not found`);
    }

    await this.prisma.formulario.delete({ where: { id } });
  }
}
