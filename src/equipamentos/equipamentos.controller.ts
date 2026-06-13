import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards} from '@nestjs/common';
import { EquipamentosService } from './equipamentos.service';
import { CreateEquipamentoDto } from './dto/create-equipamento.dto';
import { UpdateEquipamentoDto } from './dto/update-equipamento.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

@Controller('equipamentos')
export class EquipamentosController {
  constructor(private readonly equipamentosService: EquipamentosService) {}

  @Get('teste')
  teste() {
    return {
      message: 'Controller de equipamentos funcionando',
    };
  }

  @Get()
  findAll() {
    return this.equipamentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.equipamentosService.findOne(id);
  }

  @UseGuards(ApiKeyGuard)
  @Post()
  create(@Body() createEquipamentoDto: CreateEquipamentoDto) {
    return this.equipamentosService.create(createEquipamentoDto);
  }

  @UseGuards(ApiKeyGuard)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEquipamentoDto: UpdateEquipamentoDto,
  ) {
    return this.equipamentosService.update(id, updateEquipamentoDto);
  }

  @UseGuards(ApiKeyGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.equipamentosService.remove(id);
  }
}