import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { dialog } from './common/utils/dialog';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  constructor(@Inject('EMAIL_SERVICE') private client: ClientProxy){}

  newUser(body: any){
    const mockUser = {
      email: body.email,
      name: body.name,
      avatar: body.avatar
    }
    const a = dialog(mockUser);
    console.log(a);
    this.client.emit('new_email', mockUser);
    return 'Send to queue'
  }
}
