import { ApiProperty } from '@nestjs/swagger';

export enum CatsRole {
  Admin = 'Admin',
  User = 'User',
}

export class Cats {
  @ApiProperty({ example: 'Kitty', description: 'The name of the Cat' })
  name: string;

  @ApiProperty({ example: '1', description: 'The age of the Cat' })
  age: number;

  @ApiProperty({ example: 'Maine Coom', description: 'The breed of the Cat' })
  breed: string;

  @ApiProperty({ enum: CatsRole })
  role: CatsRole;
}
