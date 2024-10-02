import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { StatusService } from './status.service';

@ApiTags('status')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @ApiResponse({ status: 200, description: 'Ok.'})
  @Get()
  status() {
    return this.statusService.getStatus();
  }

}
