import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: '高橋太郎', description: '氏名', required: false })
  name: string;

  @ApiProperty({ example: 60, description: '年齢', required: false })
  age: number;
}
