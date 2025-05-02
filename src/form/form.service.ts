// src/formulario/formulario.service.ts
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
