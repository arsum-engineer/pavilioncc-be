import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedtException extends HttpException {
  constructor(message: string = 'Invalid argument provided') {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}
