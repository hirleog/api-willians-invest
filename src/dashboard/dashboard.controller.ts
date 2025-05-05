// src/dashboard/dashboard.controller.ts
import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
  private readonly ADMIN_KEY = '28d4639e283f488d36b2ae20ca3e28ce62ba9a47374c76a3180317b7d865e55a';

  @Get()
  getDashboardData(@Headers('x-admin-key') adminKey: string) {
    if (adminKey !== this.ADMIN_KEY) {
      throw new UnauthorizedException('Acesso negado');
    }

    // Aqui você pode retornar os dados do banco
    return {
      totalVisitas: 123,
      formulariosEnviados: 45,
      // etc.
    };
  }
}
