import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { EmailappService } from './emailapp.service';

@Controller()
export class EmailappController {
  constructor(private readonly emailappService: EmailappService) {}

  // @Get()
  // getHello(): string {
  //   return this.emailappService.getHello();
  // }

  @EventPattern('new_email')
  handleNewEmail(data: any){
    console.log('MENSAJEEEE: ', data)
  }

}
