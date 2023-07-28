import { v4 as uuid } from 'uuid';

export class Lead {
  readonly uuid: string;
  readonly message: string;
  readonly phone: string;
  readonly sendImage: boolean;

  constructor({
    message,
    phone,
    sendImage,
  }: {
    message: string;
    phone: string;
    sendImage: boolean;
  }) {
    this.uuid = uuid();
    this.message = message;
    this.phone = phone;
    this.sendImage = sendImage;
  }
}
