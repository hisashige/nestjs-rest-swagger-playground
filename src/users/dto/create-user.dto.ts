import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'wooBloXHqr3kmJIXOA2HJKkregBJqV',
    description: 'ユーザーID',
  })
  uid: string;
  @ApiProperty({ example: '高橋太郎', description: '氏名' })
  name: string;
  @ApiProperty({ example: 60, description: '年齢' })
  age: number;
}
