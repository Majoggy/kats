import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { CommsService } from './comms.service';
import { NextDeliveryResponseDto } from './dto/next-delivery-response.dto';

@Controller('comms')
export class CommsController {
  constructor(private readonly commsService: CommsService) {}

  @Get('your-next-delivery/:userId')
  getNextDelivery(
    @Param('userId', ParseUUIDPipe) userId: string,
  ): NextDeliveryResponseDto {
    return this.commsService.getNextDelivery(userId);
  }
}
