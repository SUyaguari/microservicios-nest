import { Injectable } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { dialog } from 'apps/monorepo-nest/src/common/utils/dialog';

@Injectable()
export class EmailappService {
  getHello(): string {
    return 'Microservicio!';
  }

  @EventPattern('new_email')
  handleNewEmail(data: any){
    dialog(data);
    console.log('MENSAJEEEE: ', data);
  }

}
