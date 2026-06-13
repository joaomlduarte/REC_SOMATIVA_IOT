import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEquipamentoDto } from './dto/create-equipamento.dto';
import { UpdateEquipamentoDto } from './dto/update-equipamento.dto';

@Injectable()
export class EquipamentosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEquipamentoDto) {
    return this.prisma.equipamento.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.equipamento.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const equipamento = await this.prisma.equipamento.findUnique({
      where: { id },
    });

    if (!equipamento) {
      throw new NotFoundException('Equipamento não encontrado.');
    }

    return equipamento;
  }

  async update(id: number, data: UpdateEquipamentoDto) {
    await this.findOne(id);

    return this.prisma.equipamento.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.equipamento.delete({
      where: { id },
    });
  }
}