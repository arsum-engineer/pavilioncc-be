import { ConflictException } from '@nestjs/common';

export class DuplicateException extends ConflictException {
  constructor(message: string = 'Duplicate entry') {
    super(message);
  }
}
