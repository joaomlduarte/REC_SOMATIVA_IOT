import { Module } from '@nestjs/common';
import { EquipamentosController } from './equipamentos.controller';
import { EquipamentosService } from './equipamentos.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ApiKeyGuard } from 'src/common/guards/api-key.guard';

@Module({
  imports: [PrismaModule],
  controllers: [EquipamentosController],
  providers: [EquipamentosService, ApiKeyGuard],
})
export class EquipamentosModule {}
