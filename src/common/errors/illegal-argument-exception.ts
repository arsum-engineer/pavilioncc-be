import { HttpException, HttpStatus } from '@nestjs/common';

export class IllegalArgumentException extends HttpException {
  constructor(message: string = 'Invalid argument provided') {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
