import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'johndoe' })
  @IsString()
  username: string; // Can be username or email

  @ApiProperty({ example: 'password123' })
  @IsString()
  @MinLength(6)
  password: string;
} 