import { DashboardController } from './dashboard/dashboard.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { FormModule } from './form/form.module';
import { FormController } from './form/form.controller';
import { FormService } from './form/form.service';

@Module({
  imports: [FormModule],
  controllers: [AppController, FormController, DashboardController],
  providers: [AppService, FormService, FormService, PrismaService],
})
export class AppModule {}
