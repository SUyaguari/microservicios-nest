import { Module } from '@nestjs/common';
import { EmailappController } from './emailapp.controller';
import { EmailappService } from './emailapp.service';

@Module({
  imports: [],
  controllers: [EmailappController],
  providers: [EmailappService],
})
export class EmailappModule {}
