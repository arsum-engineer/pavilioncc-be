import { NotImplementedException } from '@nestjs/common';

export class AppVersionNotFoundException extends NotImplementedException {
  constructor() {
    super('unable to fetch app version');
  }
}
